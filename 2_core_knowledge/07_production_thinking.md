---
id: core_prod_07
type: ExpertOntology
title: Production Thinking: Фундамент выживания систем
# Семантические связи
VALIDATES: 
  - /2_core_knowledge/06_architecture.md
MONETIZES_TO: 
  - /4_monetization/offer_architecture_audit.md
---

# Три столпа Production Thinking (by Expert)

## 1. Предикат: "Failure is the Norm" (Изоляция отказов)
**Тезис:** Система считается готовой к проду не тогда, когда она работает, а когда она предсказуемо умирает. 
**Эвристика:** Если падение БД вешает API — у тебя нет архитектуры. Если внешнее API тормозит твой Event Loop — у тебя нет Node.js.
**Value:** Экономит бизнесу деньги на простоях (SLA).

## 2. Предикат: "Observability is Data, not Text" (Структурная зоркость)
**Тезис:** `console.log` — это мусор. Текст в логах — это шум. 
**Эвристика:** Логи должны быть JSON-структурами с trace_id. Если ты не можешь построить график частоты ошибок по конкретному пользователю за 10 секунд — ты слеп в проде.
**Value:** Снижает Mean Time to Repair (MTTR) с часов до минут.

## 3. Предикат: "Perimeter is Dead" (Identity-first Security)
**Тезис:** Проверка `if (user)` — это имитация безопасности. 
**Эвристика:** Каждый внутренний микросервис должен проверять Identity заново (Zero Trust). JWT в localStorage — это мина замедленного действия. 
**Value:** Защищает от фатальных репутационных рисков и утечек.
