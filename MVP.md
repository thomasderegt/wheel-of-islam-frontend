# Wheel of Islam - MVP Strategy

## 🎯 **MVP Focus: Primary Target Group**

### **Target User**: Gen Z (Youth) - FREE Tier
- **Age Range**: 13-25 years old
- **Goal**: Reconnect with faith in non-judgmental, engaging way
- **Subscription**: FREE (user acquisition through advertisements)

## 🚀 **MVP Definition: "Faith Exploration Platform"**

### **Why This Focus?**
1. **User Acquisition**: Free tier builds the foundation user base
2. **Validation**: Test core value proposition before building paid features
3. **Complexity Management**: Avoid payment processing and multi-tier complexity initially
4. **Learning**: Understand user behavior and content needs

## 📋 **MVP Core Features (Phase 1)**

### **1. Interactive Wheel of Islam** ⭐ **CRITICAL**
- **Why**: This is the unique differentiator and main navigation
- **MVP Scope**: Basic wheel with 6-8 core Islamic topics
- **Backend Needs**: Content management for wheel sections

### **2. Goal Mode Selection** ⭐ **CRITICAL**
- **Why**: Personalization is key for Gen Z engagement
- **MVP Scope**: 3 goal modes with basic level progression
- **Backend Needs**: User model extension + progress tracking

### **3. Basic Content Delivery** ⭐ **CRITICAL**
- **Why**: Users need actual Islamic content to engage with
- **MVP Scope**: 
  - Wheel section content (prayer, Quran, character, etc.)
  - Names of Allah (first 10-15 names)
  - Basic Tazkiyyah practices
- **Backend Needs**: Content management system

### **4. Progress Tracking** ⭐ **HIGH**
- **Why**: Gamification keeps Gen Z engaged
- **MVP Scope**: Level progression within goal modes
- **Backend Needs**: User progress model and tracking

### **5. Simple AI Chatbot** ⭐ **HIGH**
- **Why**: Personalized guidance is a key differentiator
- **MVP Scope**: Basic Q&A based on goal mode and level
- **Backend Needs**: Chat session management

## 🎯 **Goal Modes (MVP) - All 5 Levels**

### **"I have doubts and looking for answers"**
- **Level 1**: Common questions and basic answers
  - What is Islam?
  - Why do Muslims pray 5 times a day?
  - What is the Quran?
  - Basic answers to scientific evidence
- **Level 2**: Evidence-based responses to doubts
  - Scientific evidence in the Quran
  - Historical evidence for Islamic claims
  - Logical arguments for Islamic beliefs
- **Level 3**: Philosophical and theological discussions
  - Deep theological questions
  - Philosophical arguments
  - Comparative religion discussions
- **Level 4**: Complex theological debates and modern challenges
  - Advanced theological concepts
  - Modern challenges to faith
  - Complex apologetics
- **Level 5**: Advanced apologetics and interfaith dialogue
  - Expert-level responses
  - Interfaith dialogue skills
  - Advanced theological debates

### **"I want to improve my practice"**
- **Level 1**: Basic prayers (5 daily prayers)
  - How to perform wudu (ablution)
  - Basic prayer positions and movements
  - Short surahs for prayer (Al-Fatiha, Al-Ikhlas, etc.)
  - Prayer times and basic etiquette
- **Level 2**: Sunnah prayers, basic dhikr, short surahs
  - Additional nawafil prayers
  - Basic dhikr practices
  - Medium-length surahs
- **Level 3**: Longer surahs, additional nawafil prayers, Quran memorization (short surahs)
  - Advanced prayer practices
  - Quran memorization techniques
  - Longer surahs for prayer
- **Level 4**: Tahajjud, fasting, advanced spiritual practices, Quran memorization (medium surahs)
  - Night prayers (Tahajjud)
  - Advanced fasting practices
  - Medium surah memorization
- **Level 5**: Consistent advanced practices, Quran memorization (long surahs), teaching others
  - Long surah memorization
  - Teaching and guiding others
  - Advanced spiritual practices

### **"I just want to take a look around"**
- **Level 1**: Basic Islamic concepts and terminology
  - What is Tawheed (monotheism)?
  - Basic Islamic terms and their meanings
  - Introduction to Islamic values
  - Simple overview of Islamic practices
- **Level 2**: Islamic history and cultural practices
  - Islamic historical events
  - Cultural practices and traditions
  - Islamic civilization overview
- **Level 3**: Core beliefs and values
  - Deep understanding of Islamic beliefs
  - Islamic ethics and values
  - Core Islamic principles
- **Level 4**: Islamic philosophy and worldview
  - Islamic philosophical concepts
  - Islamic worldview and perspective
  - Advanced Islamic thought
- **Level 5**: Advanced Islamic scholarship and contemporary issues
  - Contemporary Islamic issues
  - Advanced Islamic scholarship
  - Modern Islamic thought

## 🛠️ **MVP Backend Requirements**

### **Essential Models (Minimal Viable)**
```python
# Extended User Model
User (existing + new fields):
- goal_mode (choices: doubts, improvement, exploration)
- current_level (1) # MVP: Only Level 1
- progress_percentage

# Content Management
WheelSection:
- name, description, content, order
- goal_mode # MVP: All content is Level 1

NamesOfAllah:
- name, meaning, explanation
# MVP: First 10-15 names only, all Level 1

TazkiyyahContent:
- topic, practices, guidance
# MVP: Basic practices only, Level 1

# Progress Tracking
UserProgress:
- user, goal_mode, progress_percentage
- last_activity_date
# MVP: No level progression, just completion tracking

# AI Chatbot
ChatSession:
- user, goal_mode
- created_at
# MVP: No level complexity

ChatMessage:
- session, content, is_user_message, timestamp
```

### **MVP API Endpoints (Priority Order)**
1. **User Management** (extend existing)
   - `PUT /api/users/profile/` - Update goal mode
   - `GET /api/users/progress/` - Get user progress

2. **Content Delivery**
   - `GET /api/content/wheel-sections/` - Get wheel content (Level 1 only)
   - `GET /api/content/names-of-allah/` - Get names content (first 10-15)
   - `GET /api/content/tazkiyyah/` - Get tazkiyyah content (basic practices)
   - `GET /api/content/by-goal-mode/{goal_mode}/` - Get goal-specific content

3. **Progress Tracking**
   - `POST /api/progress/update/` - Update user progress
   - `GET /api/progress/summary/` - Get progress summary

4. **AI Chatbot**
   - `POST /api/chatbot/start/` - Start chat session
   - `POST /api/chatbot/message/` - Send/receive messages
   - `GET /api/chatbot/history/` - Get chat history

## 🚀 **MVP Development Timeline**

### **Week 1-2: Core Foundation**
- Extend user model with goal_mode (no level complexity)
- Create basic content management (Level 1 only)
- Implement wheel section delivery

### **Week 3-4: Content & Progress**
- Add Names of Allah (first 10-15) and basic Tazkiyyah content
- Implement progress tracking (completion-based, not level-based)
- Create goal-mode-specific content filtering

### **Week 5-6: AI Chatbot**
- Basic chatbot with goal-mode-aware responses
- Chat session management (no level complexity)
- Simple Q&A functionality for Level 1 content

### **Week 7-8: Testing & Polish**
- Frontend-backend integration
- User testing and feedback
- Bug fixes and improvements

## 💡 **Success Metrics for MVP**

### **Engagement Metrics**
- Daily/Monthly Active Users
- Time spent on wheel exploration
- Content completion rates
- Chatbot usage frequency

### **Retention Metrics**
- User return rate (7-day, 30-day)
- Goal mode switching behavior
- Content completion rates
- Feature adoption rates

### **Content Metrics**
- Most popular wheel sections
- Most engaging Names of Allah
- Effective Tazkiyyah practices
- Chatbot question patterns

## 🎯 **Why This MVP Approach?**

### **1. Focus on Core Value**
- **Interactive Wheel**: Unique navigation that differentiates from other Islamic apps
- **Goal-Based Learning**: Personalization that Gen Z expects
- **Progressive Content**: Keeps users engaged and coming back

### **2. Manageable Complexity**
- **No Payment Processing**: Avoids Stripe/PayPal integration complexity
- **Single User Type**: No multi-tier user management
- **Single Level**: No level progression complexity
- **Basic AI**: Simple Q&A without complex RAG pipeline

### **3. Fast Validation**
- **User Engagement**: Test if Gen Z actually uses the wheel and content
- **Content Effectiveness**: Learn what Islamic content resonates
- **Feature Prioritization**: Understand which features drive retention

### **4. Foundation for Growth**
- **User Base**: Build initial community of Gen Z users
- **Content Library**: Create foundation for future paid tiers
- **Technical Foundation**: Establish patterns for scaling

## 📊 **MVP vs Full Platform**

| Feature | MVP | Full Platform |
|---------|-----|---------------|
| User Groups | Gen Z only | Gen Z + Parents + Teachers |
| Subscription | Free only | Free + $10/month + Premium |
| Payment Processing | ❌ | ✅ |
| Goal Modes | 3 basic modes | 3 modes per user group |
| Levels | Level 1 only | 5 levels per goal mode |
| Content | Basic wheel + names + tazkiyyah | Full content library |
| AI Chatbot | Simple Q&A | Advanced RAG pipeline |
| Session Booking | ❌ | ✅ |
| Family Management | ❌ | ✅ |
| Community | ❌ | ✅ |

## 🎯 **MVP Success Criteria**

### **Primary Goals**
1. **User Acquisition**: 100+ active Gen Z users within 2 months
2. **Engagement**: Average session time > 10 minutes
3. **Retention**: 30%+ 7-day return rate
4. **Content Validation**: Identify which goal mode and content types are most engaging

### **Secondary Goals**
1. **Technical Foundation**: Establish scalable backend patterns
2. **Content Library**: Create 30+ pieces of Level 1 Islamic content
3. **User Feedback**: Collect qualitative feedback on user experience
4. **Feature Validation**: Identify which features drive most engagement

## 🚀 **Post-MVP Roadmap**

### **Phase 2: Parent Tier**
- Add subscription management
- Implement family features
- Create parent dashboard

### **Phase 3: Teacher Platform**
- Session booking system
- Content creation tools
- Income generation features

### **Phase 4: Advanced Features**
- Advanced AI with RAG pipeline
- Community features
- Analytics and reporting

---

**📝 Note**: This MVP focuses on validating the core value proposition with Gen Z users before building the complex multi-tier platform. Success here will inform the development of paid tiers and advanced features. 