# Template: Endpoint

## REST Endpoint Template

### FastAPI

```python
from fastapi import APIRouter, Depends, HTTPException, Query
from pydantic import BaseModel, EmailStr

router = APIRouter(prefix="/resource", tags=["Resource"])

class CreateResource(BaseModel):
    name: str
    description: str | None = None

class ResourceResponse(BaseModel):
    id: int
    name: str
    description: str | None

@router.get("")
def get_resources(
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
    search: str | None = None
):
    """List all resources with pagination"""
    return {"data": [], "pagination": {"page": page, "limit": limit}}

@router.get("/{resource_id}")
def get_resource(resource_id: int):
    """Get single resource by ID"""
    return {"data": {"id": resource_id}}

@router.post("")
def create_resource(resource: CreateResource):
    """Create new resource"""
    return {"data": {"id": 1, **resource.model_dump()}}

@router.patch("/{resource_id}")
def update_resource(resource_id: int, resource: CreateResource):
    """Update resource"""
    return {"data": {"id": resource_id, **resource.model_dump()}}

@router.delete("/{resource_id}")
def delete_resource(resource_id: int):
    """Delete resource"""
    return None
```

### Express

```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { page = 1, limit = 20, search } = req.query;
  res.json({ data: [], pagination: { page: Number(page), limit: Number(limit) } });
});

router.get('/:id', (req, res) => {
  res.json({ data: { id: req.params.id } });
});

router.post('/', (req, res) => {
  res.status(201).json({ data: { id: 1, ...req.body } });
});

router.patch('/:id', (req, res) => {
  res.json({ data: { id: req.params.id, ...req.body } });
});

router.delete('/:id', (req, res) => {
  res.status(204).send();
});

module.exports = router;
```

### NestJS

```typescript
@Controller('resource')
export class ResourceController {
  @Get()
  findAll(@Query() query: { page?: string; limit?: string }) {
    return { data: [], pagination: { page: query.page || 1, limit: query.limit || 20 } };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { data: { id } };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createDto: CreateResourceDto) {
    return { data: { id: '1', ...createDto } };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateResourceDto) {
    return { data: { id, ...updateDto } };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) { }
}
```

### Spring

```java
@RestController
@RequestMapping("/api/v1/resource")
public class ResourceController {

    @GetMapping
    public ResponseEntity<Page<ResourceResponse>> getResources(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int limit) {
        return ResponseEntity.ok(service.findAll(page, limit));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResourceResponse> getResource(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<ResourceResponse> createResource(
            @RequestBody @Valid ResourceRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.create(request));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ResourceResponse> updateResource(
            @PathVariable Long id,
            @RequestBody @Valid ResourceRequest request) {
        return ResponseEntity.ok(service.update(id, request));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteResource(@PathVariable Long id) {
        service.delete(id);
    }
}
```