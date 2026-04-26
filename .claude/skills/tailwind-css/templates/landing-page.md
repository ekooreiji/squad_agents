# Landing Page Template

Template completo de landing page.

---

## Estrutura

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <!-- Navigation -->
  <nav class="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <span class="text-2xl font-bold text-blue-600">Logo</span>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="#features" class="text-gray-600 hover:text-blue-600">Recursos</a>
          <a href="#about" class="text-gray-600 hover:text-blue-600">Sobre</a>
          <a href="#pricing" class="text-gray-600 hover:text-blue-600">Planos</a>
          <a href="#contact" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Começar
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Título Principal
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          Subtítulo explicativo do produto ou serviço.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" class="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Começar Agora
          </a>
          <a href="#" class="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:border-gray-400 transition">
            Saber Mais
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="py-20">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nossos Recursos
        </h2>
        <p class="text-xl text-gray-600">
          Tudo que você precisa para ter sucesso.
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Recurso 1</h3>
          <p class="text-gray-600">Descrição do recurso funcionalidades e benefícios.</p>
        </div>
        
        <!-- Feature 2 -->
        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Recurso 2</h3>
          <p class="text-gray-600">Descrição do recurso funcionalidades e benefícios.</p>
        </div>
        
        <!-- Feature 3 -->
        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Recurso 3</h3>
          <p class="text-gray-600">Descrição do recurso funcionalidades e benefícios.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 bg-blue-600">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
        Pronto para começar?
      </h2>
      <p class="text-xl text-blue-100 mb-8">
        Junte-se a milhares de clientes satisfeitos.
      </p>
      <a href="#" class="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
        Começar Gratuitamente
      </a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-400 py-12">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <span class="text-2xl font-bold text-white">Logo</span>
          <p class="mt-4">Descrição breve da empresa.</p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Produto</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white">Recursos</a></li>
            <li><a href="#" class="hover:text-white">Planos</a></li>
            <li><a href="#" class="hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Empresa</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white">Sobre</a></li>
            <li><a href="#" class="hover:text-white">Blog</a></li>
            <li><a href="#" class="hover:text-white">Carreiras</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Legal</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white">Privacidade</a></li>
            <li><a href="#" class="hover:text-white">Termos</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-12 pt-8 text-center">
        <p>&copy; 2024 Empresa. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</body>
</html>
```