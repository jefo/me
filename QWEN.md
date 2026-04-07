# Personal Brand & Knowledge Graph Repository

## Overview

This repository is a **MBSE-style knowledge graph** that serves as the foundation for a Senior Developer's personal brand, content creation, and B2B consulting business. It captures 14 years of development expertise and transforms raw experience into monetizable intellectual assets.

The system follows the **File-System-as-a-Graph (FSaaG)** paradigm: every document is a node with YAML frontmatter that defines semantic relationships (predicates) between nodes, enabling traceability and explainable AI-assisted content generation.

## Architecture: 5-Layer Knowledge Pipeline

```
/
├── .system/                      # System brain: ontology, agents, stakeholders
├── 1_experience_capture/         # Raw experience (project logs, reflections, inputs)
├── 2_core_knowledge/             # Crystallized expertise (concepts, frameworks, models)
├── 3_value_factory/              # Content & demand generation (posts, campaigns, SEO)
├── 4_monetization/               # Consulting offers & client cases
└── 5_active_projects/            # Active MBSE projects
```

### Layer Descriptions

| Layer | Purpose | Key Contents |
|---|---|---|
| **.system** | Ontology, AI agent prompts, stakeholder needs | `ontology/`, `ai_agents/`, `stakeholders.md` |
| **1_experience_capture** | Raw material for knowledge extraction | `projects_logs/`, `daily_reflections/`, `external_inputs/` |
| **2_core_knowledge** | Expert Digital Twin — reusable patterns & frameworks | `01_js_fundamentals.md` → `07_production_thinking.md` |
| **3_value_factory** | Content matrix mapped to awareness stages | `organic_demand/`, `campaigns/`, `community_content/`, `lead_magnets/` |
| **4_monetization** | Consulting offers & proof-of-value cases | `offer_architecture_audit.md`, `consulting_offers/`, `client_cases/` |
| **5_active_projects** | Current initiatives (MBSE standard) | Launch consulting, community boost projects |

## Core Knowledge Roadmap (Hard Skills Pyramid)

The expertise is structured as a progressive roadmap from fundamentals to production-level thinking:

1. **JS Fundamentals** — Language core
2. **Node.js Core** — Event Loop, runtime internals
3. **API Design** — REST, GraphQL, contracts
4. **Databases** — Data modeling, optimization
5. **Auth & Security** — JWT, sessions, vulnerabilities
6. **Architecture** — DDD, Clean Architecture, patterns
7. **Production Thinking** — Observability, resilience, scaling

## Ontology & Graph Relations

### Key Predicates

| Predicate | Direction | Purpose |
|---|---|---|
| `DERIVES_FROM` | Knowledge → Experience | Traceability to raw experience |
| `LEADS_TO` | Content → Content/Offer | Funnel routing (awareness stages) |
| `COVERS_INTENT` | Content → SearchIntent | SEO intent coverage |
| `TARGETS_PAIN` | SearchIntent → PainPoint | Maps search queries to user problems |
| `REQUIRES_KNOWLEDGE` | SearchIntent → CoreKnowledge | Content generation prerequisites |
| `CONVERTS_TO` | SearchIntent → Offer | Demand → monetization path |
| `MONETIZES` | Offer → Knowledge | What expertise an offer sells |
| `REFERENCES` | Content → Knowledge | Content backed by specific expertise |
| `EXPLAINS_PAIN_FROM` | Content → Knowledge | Content that illustrates a problem |

### Intent Schema

Located in `.system/ontology/intents_schema.md`, defines how search intent nodes connect to knowledge and monetization layers, enabling **Explainable Memory** — every generated article has a traceable path from user pain → expert knowledge → consulting offer.

## AI Agents

### Principal Sensemaker Agent

Defined in `.system/ai_agents/principal-sensemaker.md`. This agent:
- Analyzes raw experience from Layer 1
- Abstracts it into reusable frameworks for Layer 2
- Ensures ontological rigor (YAML frontmatter, traceability)
- Highlights commercial value of each concept

**Workflow:** Raw input → Chain of Thought → Structured knowledge artifact with `DERIVES_FROM` links.

## Content & Demand Generation

### Awareness Stages Funnel (Ben Hunt Model)

```
3_value_factory/
├── stage_1_problem_aware/      # "Something's broken, don't know why"
├── stage_2_solution_aware/     # "I see the problem, need a fix"
├── stage_3_product_aware/      # "I know what's needed, looking for an expert"
├── organic_demand/             # SEO-driven intent nodes
│   ├── intent_map.md           # All active intent clusters
│   └── intents/                # Individual intent nodes with relations
└── campaigns/                  # Time-bound content campaigns
    └── shorts_recon_v1/        # Shorts/Reels campaign (7-day)
```

### Example Funnel Traceability

```
post_event_loop_block.md (Problem Aware)
  → guide_production_architecture.md (Solution Aware)
    → offer_architecture_audit.md (Monetization)
```

Each piece of content has explicit `LEADS_TO` and `REFERENCES` predicates in its frontmatter.

## Monetization

Current consulting offers:
- **Architecture Audit** ($500–$2000) — DB schema review, API bottleneck analysis, auth security check, production readiness plan
- **Security Audit** — (planned, linked from intent nodes)
- **Performance & Scalability Audit** — (planned)
- **Fractional CTO** — (planned)

## Active Search Intents

| Intent Cluster | Volume | Difficulty | Target Offer |
|---|---|---|---|
| node.js memory leak production | High | Hard | Architecture Audit |
| Node.js Security Best Practices | High | Medium | Security Audit |
| Scalable Node.js Architecture | Medium | Hard | Fractional CTO |
| High load in Node.js Express | High | Hard | Performance Audit |

## Legacy

The `/legacy` directory contains earlier project artifacts: about me, content strategy, DDD framework docs, Cloud SDK docs, and blog drafts. These inform the current knowledge base.

## Usage

### For Content Creation
1. Identify target search intent in `3_value_factory/organic_demand/intents/`
2. Review linked `REQUIRES_KNOWLEDGE` files in `2_core_knowledge/`
3. Generate content following the intent's `tone_of_voice` and `required_sections`
4. Ensure output has `LEADS_TO` predicate pointing to next funnel step or offer

### For Knowledge Crystallization
1. Add raw experience to `1_experience_capture/`
2. Invoke Principal Sensemaker Agent with the raw material
3. Review generated artifact in `2_core_knowledge/`
4. Verify `DERIVES_FROM` traceability and commercial value section

### For Campaign Planning
1. Create campaign directory under `3_value_factory/campaigns/`
2. Define daily content files with frontmatter metadata
3. Link each file to `2_core_knowledge` and `4_monetization` nodes
4. Track status via `status:` field (draft → in_production → published)

## Tone of Voice

Engineering pragmatism. No fluff. Dense, factual, structured with markdown (bold, lists, quotes). Focus on root causes and heuristics over emotion or narrative.
