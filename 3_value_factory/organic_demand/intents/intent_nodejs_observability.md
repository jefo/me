---
id: intent_nodejs_observability
type: SearchIntent
keyword_cluster: ["node.js structured logging winston pino example", "pino vs winston production logging"]
search_volume: "Medium"
difficulty: "Medium"

# СЕМАНТИЧЕСКИЕ СВЯЗИ (Граф):
TARGETS_PAIN: "Невозможно найти причину ошибки в продакшене — логи нечитаемы"
REQUIRES_KNOWLEDGE: 
  - /2_core_knowledge/07_production_thinking.md
CONVERTS_TO: 
  - /4_monetization/offer_architecture_audit.md

# ПРАВИЛА ГЕНЕРАЦИИ (Для LLM):
tone_of_voice: "Engineering / Pragmatic"
required_sections: ["Why console.log is Anti-Pattern", "Structured Logging with Pino/Winston", "Trace ID Propagation Across Services", "Dashboard Metrics that Matter"]
---

# Поисковый Интент: Структурированное логирование в Node.js

Пользователь ищет пример настройки библиотеки логирования. Его путь:
1. Разрушение мифа — `console.log` в проде бесполезен.
2. Практика — JSON-структура с trace_id (Pino/Winston).
3. Связь с Observability — логи как данные для алертинга и дашбордов.
4. Оффер — Архитектурный аудит включает проверку наблюдаемости.
