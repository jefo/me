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
| intent_dev_waste | Why software development is so slow and expensive | Medium | Medium | 08_engineering_philosopher | offer_strategic_audit |
| intent_tech_debt_roi | ROI of technical debt refactoring for founders | Low | Easy | 08_engineering_philosopher | offer_strategic_audit |
| intent_cto_hiring | Hiring first CTO vs Outsourcing for startup | High | Medium | 08_engineering_philosopher | offer_fractional_cto |
| intent_node_leak | node.js memory leak production | High | Hard | 02_nodejs_core, 07_production_thinking | offer_strategic_audit |

## Покрытие Воронки

- **Problem Aware (Business):** intent_dev_waste, intent_tech_debt_roi
- **Solution Aware (Business):** intent_cto_hiring
- **Problem Aware (Tech):** intent_node_leak
