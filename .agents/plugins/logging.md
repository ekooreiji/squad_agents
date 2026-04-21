# Logging Plugin

## Nome

Plugin de Logging com Rotação

## Função

Registrar localmente todas as interações dos agentes (mensagens, erros, tempo de execução) e implementar rotação de logs para evitar crescimento excessivo dos arquivos.

## Configuração

- Formato de arquivo: .log (texto simples, delimitado por |)
- Nome do arquivo: logs/<nome_projeto>_<data>.log
- Retenção: um arquivo por projeto, com rotação diária ou por execução
- Timestamp: ISO‑8601 no timezone de São Paulo
- Contexto: input, output, erros, tempo de execução

## Comportamento

Este plugin intercepta cada mensagem trocada entre agentes e salva em um arquivo de log para auditoria e análise posterior.


## Estrutura de cada linha

```bash
[timestamp] | [agent] | [event_type] | [mensagem] | [exec_time_ms] | [erro?]
```

## Exemplos

```bash
2026-04-20T20:53:00-03:00 | Pesquisador | input | Pesquisar IA generativa em 2026 | 0 | -
2026-04-20T20:53:02-03:00 | Pesquisador | output | Resultados coletados: artigos de 2025-2026 | 2000 | -
2026-04-20T20:53:05-03:00 | Analista | error | Falha ao processar dados | 1500 | ValueError
```

### Implementação sugerida (Python)

```py
import time
from datetime import datetime
import pytz
import os

class RotatingLoggingPlugin:
    def __init__(self, project_name: str, rotation: str = "daily"):
        self.project_name = project_name
        self.rotation = rotation
        self.tz = pytz.timezone("America/Sao_Paulo")
        os.makedirs("logs", exist_ok=True)

    def _get_logfile(self):
        now = datetime.now(self.tz)
        if self.rotation == "daily":
            date_str = now.strftime("%Y-%m-%d")
            return f"logs/{self.project_name}_{date_str}.log"
        elif self.rotation == "execution":
            timestamp = now.strftime("%Y%m%d_%H%M%S")
            return f"logs/{self.project_name}_{timestamp}.log"
        else:
            return f"logs/{self.project_name}.log"

    def log(self, agent: str, event_type: str, message: str, exec_time_ms: int = 0, error: str = "-"):
        timestamp = datetime.now(self.tz).isoformat()
        entry = f"{timestamp} | {agent} | {event_type} | {message} | {exec_time_ms} | {error}\n"
        logfile = self._get_logfile()
        with open(logfile, "a", encoding="utf-8") as f:
            f.write(entry)

    def timed_execution(self, agent: str, event_type: str, func, *args, **kwargs):
        start = time.time()
        try:
            result = func(*args, **kwargs)
            exec_time = int((time.time() - start) * 1000)
            self.log(agent, event_type, str(result), exec_time)
            return result
        except Exception as e:
            exec_time = int((time.time() - start) * 1000)
            self.log(agent, "error", str(e), exec_time, error=type(e).__name__)
            raise
```

## Benefícios

= Auditoria completa: registra input, output, erros e tempo.
= Rotação automática: evita arquivos gigantes, cria um novo por dia ou execução.
= Local e simples: sem dependência externa, apenas arquivos .log.
= Flexível: pode evoluir para banco de dados se necessário.
