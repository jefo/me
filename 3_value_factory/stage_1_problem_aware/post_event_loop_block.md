---
id: post_event_loop
type: ContentPiece
awareness_stage: Problem Aware
topic: Node.js
# Графовые связи
EXPLAINS_PAIN_FROM: /2_core_knowledge/02_nodejs_core.md
LEADS_TO: /3_value_factory/stage_2_solution_aware/guide_production_architecture.md
---
# Почему ваш Node.js сервер "замирает" при 100 юзерах?

Вы написали API. На локалке всё летает. Выкатили в прод — юзеры жалуются на таймауты, хотя CPU загружен на 10%.
Чаще всего проблема не в базе данных, а в том, что вы заблокировали Event Loop синхронным парсингом большого JSON или кривым циклом...

*(В конце поста даем ссылку: "Как правильно проектировать архитектуру, чтобы такого не было — читайте в моем гайде...")*
