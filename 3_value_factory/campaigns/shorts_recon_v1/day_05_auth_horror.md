---
id: short_05_auth
type: VideoScript
platform: Shorts / Reels
status: draft
funnel_step: 05_auth
awareness_stage: Problem Aware
hypothesis: "Разработчики недооценивают риск хранения JWT в браузере"
# Связи
REFERENCES: /2_core_knowledge/05_auth_security.md
LEADS_TO: /4_monetization/offer_security_audit.md
---
# Сценарий: Хоррор с JWT

**Visual:** Эксперт крупным планом, на фоне скриншот консоли разработчика с XSS атакой.

**Hook:** "Если ты хранишь JWT в localStorage — поздравляю, ты только что отдал ключи от квартиры первому встречному хакеру."

**Body:** 
1. Любой сторонний скрипт (метрика, чат) имеет доступ к localStorage. 
2. Одна XSS-уязвимость — и сессия пользователя украдена безвозвратно.
3. Правильный путь: HttpOnly Cookies с флагом SameSite.

**Call to Value:** 
"Это база безопасности. Если в твоем проекте авторизация сделана 'по туториалу 2015 года' — жди беды. Пиши в директ 'Аудит', проверим твои дыры до того, как их найдут другие."
