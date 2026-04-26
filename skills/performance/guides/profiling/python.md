# Python Profiling

## cProfile

```python
import cProfile
import pstats
import io

profiler = cProfile.Profile()

# Enable
profiler.enable()

# Your code here
result = heavy_function()

profiler.disable()

# Print stats
stats = pstats.Stats(profiler)
stats.sort_stats('cumulative').print_stats(10)
```

## Line Profiling

```python
# pip install line-profiler

@profile
def slow_function():
    # your code
    for i in range(1000000):
        pass
```

## py-spy

```bash
# Install
pip install py-spy

# Profile running process
py-spy -- python app.py

# CPU flame graph
py-spy record -- python app.py
py-spy record -- flamegraph.svg -- python app.py
```