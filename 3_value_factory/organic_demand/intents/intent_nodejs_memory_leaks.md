---
id: intent_node_leak
type: SearchIntent
keyword_cluster: ["node.js memory leak production", "how to debug heap out of memory"]
search_volume: "High"
difficulty: "Hard"

# СЕМАНТИЧЕСКИЕ СВЯЗИ (Граф):
TARGETS_PAIN: "Сервер падает с Out of Memory в продакшене"
REQUIRES_KNOWLEDGE: 
  - /2_core_knowledge/02_nodejs_core.md
  - /2_core_knowledge/07_production_thinking.md
CONVERTS_TO: 
  - /4_monetization/offer_architecture_audit.md

# ПРАВИЛА ГЕНЕРАЦИИ (Для LLM):
tone_of_voice: "Expert / Diagnostic"
required_sections: ["Root Cause Analysis", "Heap Dump Tutorial", "Prevention Checklist"]
---

# Поисковый Интент: Утечки памяти в Node.js

Этот узел описывает потребность пользователя, который столкнулся с деградацией системы.
Его "путь по графу" должен выглядеть так:
1. Подтверждение боли (Да, утечки — это ад).
2. Диагностика (Связь с Core Knowledge: Event Loop и Heap).
3. Решение (Связь с Production Thinking: Monitoring & Alerting).
4. Оффер (Архитектурный аудит как финальное решение проблемы).
