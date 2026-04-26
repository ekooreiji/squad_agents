# OAuth 2.0

## Visão Geral

OAuth 2.0 é um framework de autorização que permite aplicações de terceiros acessarem recursos do usuário sem expor credenciais.

## Fluxos (Grant Types)

| Fluxo | Uso |
|-------|-----|
| Authorization Code | Server-side apps |
| PKCE | Mobile/SPA |
| Client Credentials | Machine-to-machine |
| Device Code | IoT |
| Refresh Token | Renewal |

## Authorization Code Flow

```
┌─────────────────────────────────────────────────────────────┐
│              Authorization Code Flow                        │
├─────────────────────────────────────────────────────────────┤
│  1. User clicks "Login with Google"                       │
│  2. App redirects to /oauth/authorize                  │
│  3. User consents                                 │
│  4. Server returns code                         │
│  5. App exchanges code for token                  │
│  6. Server returns tokens                    │
└─────────────────────────────────────────────────────────────┘
```

### Step 1: Redirect to Authorization

```http
GET /oauth/authorize?
  client_id=YOUR_CLIENT_ID&
  redirect_uri=https://yourapp.com/callback&
  response_type=code&
  scope=read:profile read:email&
  state=RANDOM_STATE HTTP/1.1
Host: auth.example.com
```

### Step 2: User Consents

```
┌─────────────────────────────────────────┐
│   Authorization Prompt                 │
├─────────────────────────────────────────┤
│   Wants to access your:               │
│   ☑ Read your profile                │
│   ☑ Read your email                  │
│   [Cancel] [Allow]                  │
└─────────────────────────────────────────┘
```

### Step 3: Callback with Code

```http
HTTP/1.1 302 Found
Location: https://yourapp.com/callback?
  code=AUTHORIZATION_CODE&
  state=RANDOM_STATE
```

### Step 4: Exchange Code for Token

```http
POST /oauth/token HTTP/1.1
Host: auth.example.com
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&
code=AUTHORIZATION_CODE&
client_id=YOUR_CLIENT_ID&
client_secret=YOUR_CLIENT_SECRET&
redirect_uri=https://yourapp.com/callback
```

### Step 5: Token Response

```json
{
  "access_token": "eyJ...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "eyJ...",
  "scope": "read:profile read:email"
}
```

## PKCE Flow (Proof Key for Code Exchange)

Para SPAs e Mobile Apps.

### Step 1: Generate Code Verifier

```javascript
const codeVerifier = generateRandomString(128);
const codeChallenge = await sha256(codeVerifier);
```

### Step 2: Authorization Request with PKCE

```http
GET /oauth/authorize?
  client_id=YOUR_CLIENT_ID&
  redirect_uri=https://yourapp.com/callback&
  response_type=code&
  code_challenge=CODE_CHALLENGE&
  code_challenge_method=S256 HTTP/1.1
```

### Step 3: Exchange with Verifier

```http
POST /oauth/token HTTP/1.1

grant_type=authorization_code&
code=AUTHORIZATION_CODE&
client_id=YOUR_CLIENT_ID&
code_verifier=CODE_VERIFIER
```

## Client Credentials Flow

Para machine-to-machine.

```http
POST /oauth/token HTTP/1.1
Host: auth.example.com

grant_type=client_credentials&
client_id=YOUR_CLIENT_ID&
client_secret=YOUR_CLIENT_SECRET&
scope=read:admin
```

```json
{
  "access_token": "eyJ...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

## Refresh Token Flow

```http
POST /oauth/token HTTP/1.1

grant_type=refresh_token&
refresh_token=REFRESH_TOKEN&
client_id=YOUR_CLIENT_ID
```

## Scopes

| Scope | Description |
|-------|-------------|
| openid | OpenID Connect |
| profile | Name, picture |
| email | Email |
| read:users | Read users |
| write:users | Write users |

## Implementation

### FastAPI + Authlib

```python
from fastapi import FastAPI
from authlib.integrations.starlette_client import OAuth

app = FastAPI()
oauth = OAuth()

oauth.register(
    name='google',
    client_id='GOOGLE_CLIENT_ID',
    client_secret='GOOGLE_CLIENT_SECRET',
    authorize_url='https://accounts.google.com/o/oauth2/v2/auth',
    token_url='https://oauth2.googleapis.com/token',
    userinfo_endpoint='https://www.googleapis.com/oauth2/v3/userinfo',
)

@app.get('/login/google')
async def login_google(request: Request):
    return await oauth.google.authorize_redirect(request, '/callback')

@app.get('/callback')
async def callback(request: Request):
    token = await oauth.google.authorize_access_token(request)
    userinfo = token.get('userinfo')
    return userinfo
```

### Express + Passport

```javascript
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: 'GOOGLE_CLIENT_ID',
    clientSecret: 'GOOGLE_CLIENT_SECRET',
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/')
);
```

## Security Best Practices

| Practice | Description |
|----------|-------------|
| Use state | CSRF protection |
| Use PKCE | For public clients |
| Validate redirect_uri | Prevent redirect spoofing |
| Short-lived tokens | Access: 1h or less |
| Rotate secrets | Regular rotation |

## Referências

- [OAuth 2.0 RFC](https://tools.ietf.org/html/rfc6749)
- [OAuth 2.0 Security](https://tools.ietf.org/html/rfc6819)