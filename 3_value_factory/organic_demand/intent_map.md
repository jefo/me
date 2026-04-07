---
id: intent_map_001
type: IntentMap
version: 1.0
created: 2026-04-07
---
# Карта Поисковых Интентов (Intent Map)

## Активные Интент-Кластеры

| ID | Кластер | Volume | Difficulty | Linked Knowledge | Target Offer |
|---|---|---|---|---|---|
| intent_node_leak | node.js memory leak production | High | Hard | 02_nodejs_core, 07_production_thinking | offer_architecture_audit |
| intent_node_security | Node.js Security Best Practices | High | Medium | 05_auth_security | offer_security_audit |
| intent_scalable_arch | Scalable Node.js Architecture for Startups | Medium | Hard | 06_architecture | offer_fractional_cto |
| intent_high_load | Handling high load in Node.js Express | High | Hard | 02_nodejs_core, 07_production_thinking | offer_performance_audit |

## Покрытие Воронки

- **Problem Aware:** intent_node_leak, intent_high_load
- **Solution Aware:** intent_node_security
- **Product Aware:** intent_scalable_arch
