# Онтология: Схема Поисковых Интентов (Intent Schema)

## Описание
Модель поискового спроса, связывающая поисковые интенты с Core Knowledge и Monetization.

## Новые Предикаты (Relations)

| Предикат | Направление | Описание |
|---|---|---|
| `COVERS_INTENT` | ContentPiece → SearchIntent | Контент покрывает конкретный поисковый запрос |
| `RESOLVES_PAIN` | CoreKnowledge → PainPoint | Знание решает конкретную «боль» пользователя |
| `EVIDENCE_OF` | ClientCase → Expertise | Кейс доказывает экспертность (E-E-A-T) |
| `TARGETS_PAIN` | SearchIntent → PainPoint | Интент нацелен на конкретную боль |
| `REQUIRES_KNOWLEDGE` | SearchIntent → CoreKnowledge | Для закрытия интента требуется конкретное знание |
| `CONVERTS_TO` | SearchIntent → ConsultingOffer | Интент конвертируется в конкретный оффер |

## Типы Узлов

- **SearchIntent** — кластер поисковых запросов с метаданными (volume, difficulty)
- **PainPoint** — конкретная проблема/боль целевой аудитории
- **Expertise** — доказательство экспертности (кейсы, сертификаты)

## Правила Генерации Контента

1. Каждый узел SearchIntent обязан иметь `REQUIRES_KNOWLEDGE` — минимум 1 связь
2. Каждый узел SearchIntent обязан иметь `CONVERTS_TO` — минимум 1 связь с Monetization
3. Сгенерированный контент наследует Tone of Voice из узла интента
4. Статья должна логически вести читателя: Pain → Knowledge → Solution → Offer
