# Wheel of Islam Backend - Current State & Requirements

## 📋 Project Overview

**Wheel of Islam (WOI)** is a multi-tier Islamic education platform designed to serve different user groups with varying needs and subscription levels. The backend needs to support a sophisticated ecosystem that goes far beyond basic user authentication.

## 🏗️ Current Backend State

### ✅ **What's Actually Implemented**

#### **Users Module (Basic Authentication Only)**
- **Location**: `users/` Django app
- **Features**: 
  - User registration and login
  - Token-based authentication
  - Basic user model (Django's default User)
- **API Endpoints**:
  - `POST /api/users/register/` - User registration
  - `POST /api/users/login/` - User authentication  
  - `POST /api/users/token/` - Token generation
- **Status**: ✅ Working but insufficient for business needs

#### **Technical Infrastructure**
- **Framework**: Django REST Framework
- **Database**: SQLite (dev) / PostgreSQL (production ready)
- **CORS**: Configured for React frontend communication
- **Environment Variables**: Production-ready configuration

---

## 🚨 **Critical Gap: Backend vs Frontend Reality**

### **Frontend Business Model (What the Backend Must Support)**

#### **1. Multi-Tier User Groups**
```
Gen Z (Youth) - FREE
├── Goal Modes: "I have doubts", "I want to improve", "Just looking around"
├── 5 Progressive Levels per goal mode (Novice → Proficient)
└── Features: Interactive wheel, basic content, community, AI chatbot

Parents - $10/month  
├── Goal Modes: "Support children", "Manage busy schedule", "Grow knowledge"
├── All Gen Z features + Family management
└── Features: Parent dashboard, progress tracking, family activities

Teachers/Imams - Premium
├── Goal Modes: "Teach effectively", "Generate income", "Community leadership"
├── All Parent features + Professional tools
└── Features: Session booking, student management, income generation
```

#### **2. Core Features the Backend Must Support**
- **Interactive Wheel of Islam** - Main navigation system
- **Names of Allah** - 99 Names exploration and learning
- **Tazkiyyah** - Self-purification and spiritual growth
- **Community** - Peer connection and support
- **AI Improvement Chatbot** - Personalized guidance system
- **Progress Tracking** - Across levels and goal modes
- **Subscription Management** - Payment processing and tier access
- **Session Booking** - Teacher-student 1-on-1 sessions
- **Family Management** - Parent-child relationships and tracking

---

## 🛠️ **Required Backend Modules (Not Yet Implemented)**

### **1. Subscription Management Module**
```python
# Required Models
- Subscription (tier, status, payment_info, start_date, end_date)
- Payment (amount, method, status, transaction_id)
- FeatureAccess (user, feature, allowed, restrictions)

# Required Endpoints
- POST /api/subscriptions/create/
- GET /api/subscriptions/status/
- POST /api/subscriptions/upgrade/
- POST /api/subscriptions/cancel/
```

### **2. User Groups & Goal Management Module**
```python
# Required Models
- UserGroup (gen_z, parent, teacher)
- GoalMode (doubts, improvement, exploration, etc.)
- UserLevel (novice, beginner, intermediate, advanced, proficient)
- UserProgress (user, goal_mode, level, progress_percentage)

# Required Endpoints
- GET /api/user-groups/
- POST /api/goal-modes/select/
- GET /api/user-progress/
- POST /api/user-progress/update/
```

### **3. Content Management Module**
```python
# Required Models
- Content (title, description, content_type, user_group, level)
- WheelSection (name, description, content, order)
- NamesOfAllah (name, meaning, explanation, benefits)
- TazkiyyahContent (topic, practices, guidance)

# Required Endpoints
- GET /api/content/wheel-sections/
- GET /api/content/names-of-allah/
- GET /api/content/tazkiyyah/
- GET /api/content/by-level/{level}/
```

### **4. Session Booking Module**
```python
# Required Models
- Teacher (user, specialties, availability, hourly_rate)
- Session (teacher, student, date_time, duration, status, topic)
- SessionReview (session, rating, feedback)

# Required Endpoints
- GET /api/teachers/available/
- POST /api/sessions/book/
- GET /api/sessions/my-sessions/
- POST /api/sessions/{id}/cancel/
```

### **5. Family Management Module**
```python
# Required Models
- Family (parent, children, family_goals)
- FamilyActivity (family, activity_type, scheduled_date, completed)
- ChildProgress (child, parent, goal_mode, level, progress)

# Required Endpoints
- POST /api/families/create/
- GET /api/families/{id}/activities/
- POST /api/families/{id}/activities/
- GET /api/families/{id}/children-progress/
```

### **6. AI Chatbot Module**
```python
# Required Models
- ChatSession (user, goal_mode, current_level)
- ChatMessage (session, message_type, content, timestamp)
- ChatbotResponse (session, response, suggested_actions)

# Required Endpoints
- POST /api/chatbot/start-session/
- POST /api/chatbot/message/
- GET /api/chatbot/session/{id}/history/
- POST /api/chatbot/session/{id}/end/
```

### **7. Community Module**
```python
# Required Models
- CommunityGroup (name, description, user_group, max_members)
- CommunityPost (group, author, content, likes, comments)
- CommunityComment (post, author, content, timestamp)

# Required Endpoints
- GET /api/community/groups/
- POST /api/community/groups/join/
- POST /api/community/posts/
- GET /api/community/posts/by-group/{group_id}/
```

---

## 🔧 **Technical Requirements**

### **Database Schema Updates**
- **User Model Extension**: Add user_group, goal_mode, current_level fields
- **Payment Integration**: Stripe/PayPal integration for subscriptions
- **File Storage**: For content, images, and user uploads
- **Caching**: Redis for session management and content caching

### **API Design Requirements**
- **Authentication**: JWT tokens with role-based access
- **Rate Limiting**: Prevent abuse of AI chatbot and API endpoints
- **Webhooks**: For payment confirmations and subscription updates
- **Real-time Features**: WebSocket support for chat and notifications

### **Security Requirements**
- **Data Privacy**: GDPR compliance for user data
- **Payment Security**: PCI DSS compliance for payment processing
- **Content Moderation**: For community features and user-generated content
- **Access Control**: Feature-based permissions for different subscription tiers

---

## 🚀 **Implementation Priority**

### **Phase 1: Core Foundation (Critical)**
1. **Extend User Model** - Add user_group, goal_mode, level fields
2. **Subscription System** - Basic payment integration and tier management
3. **Content Management** - Basic content delivery for wheel sections
4. **Progress Tracking** - User progress across levels and goal modes

### **Phase 2: Advanced Features**
1. **AI Chatbot** - Basic Q&A system with goal-based responses
2. **Session Booking** - Teacher-student booking system
3. **Family Management** - Parent-child relationship management
4. **Community Features** - Basic group and post functionality

### **Phase 3: Optimization & Scale**
1. **Advanced AI** - RAG pipeline for personalized responses
2. **Analytics** - User behavior and progress analytics
3. **Performance** - Caching, CDN, and database optimization
4. **Advanced Features** - Advanced content creation tools for teachers

---

## 📊 **Current vs Required API Endpoints**

| Feature | Current Status | Required Endpoints | Priority |
|---------|---------------|-------------------|----------|
| User Auth | ✅ Basic | 3 endpoints | ✅ Done |
| Subscriptions | ❌ Missing | 8+ endpoints | 🔴 Critical |
| User Groups | ❌ Missing | 6+ endpoints | 🔴 Critical |
| Content | ❌ Missing | 10+ endpoints | 🟡 High |
| Sessions | ❌ Missing | 8+ endpoints | 🟡 High |
| Family Mgmt | ❌ Missing | 6+ endpoints | 🟡 High |
| AI Chatbot | ❌ Missing | 6+ endpoints | 🟡 High |
| Community | ❌ Missing | 8+ endpoints | 🟢 Medium |

---

## 🎯 **Next Steps**

### **Immediate Actions Required**
1. **Update User Model** - Add fields for user_group, goal_mode, current_level
2. **Create Subscription Module** - Implement payment integration
3. **Build Content Management** - Basic content delivery system
4. **Implement Progress Tracking** - User advancement system

### **Development Approach**
- **Modular Development** - Build one module at a time
- **API-First Design** - Ensure frontend can integrate easily
- **Testing Strategy** - Comprehensive testing for each module
- **Documentation** - Keep API documentation updated

---

## 📝 **Conclusion**

The current backend is a **basic authentication system** that supports only the simplest user management. The frontend requires a **sophisticated multi-tier platform** with subscription management, content delivery, progress tracking, and advanced features.

**Gap Analysis**: ~80% of required backend functionality is missing, including critical business logic for subscriptions, user groups, and content management.

**Recommendation**: Focus on implementing the core foundation (Phase 1) before attempting to deploy or integrate with the frontend, as the current backend cannot support the frontend's business requirements. 