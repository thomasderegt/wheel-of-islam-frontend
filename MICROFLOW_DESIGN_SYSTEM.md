# Microflow Design System

## Overview
The "One True God" microflow serves as the default template for all topic flows in the Wheel of Islam application. This document outlines the complete design system, structure, and implementation guidelines.

## 🎯 **Flow Structure**

### **4-Step Progress System**
1. **Topic Selection** (Wheel) - Step 1 of 4
2. **Introduction** - Step 2 of 4  
3. **Overview** - Step 3 of 4
4. **Detail** - Step 4 of 4

### **Navigation Pattern**
- **Primary Actions**: Blue buttons (`#00f2fa`) with glow effects
- **Back Navigation**: Red buttons (`#FF007F`) with glow effects
- **Back buttons positioned underneath** other buttons
- **Consistent button width**: 200px
- **Increased spacing**: `mt-12 mb-12` between content and buttons

## 📱 **Page Components**

### **1. Introduction Page (`/topic-intro`)**
```jsx
// Structure
- Progress Bar (Step 2 of 4)
- Header (Large title with glow)
- Subtitle (Blue color with glow)
- Video Window (Placeholder)
- Navigation Buttons:
  - Primary Action (Blue, glow)
  - Back to Wheel (Red, glow)
```

**Key Features:**
- Video window placeholder with "Coming Soon"
- Progress bar at bottom
- Consistent button styling with glow effects
- Blue titles and subtitles with glow effects

### **2. Overview Page (`/topic-overview`)**
```jsx
// Structure
- Progress Bar (Step 3 of 4)
- Title (Blue color with glow)
- Subtitle (Blue color with glow)
- Content Grid/List
- Navigation Buttons:
  - Primary Action (Blue, glow)
  - Back to Introduction (Red, glow)
```

**Key Features:**
- Grid or list layout for content items
- Clickable items that navigate to detail pages
- Progress bar at bottom
- Blue titles with glow effects

### **3. Detail Page (`/topic-detail/:id`)**
```jsx
// Structure
- Progress Bar (Step 4 of 4)
- Main Content Display
- Navigation Buttons:
  - More (Blue, glow)
  - Quiz (Blue, glow)
  - Back to Overview (Red, glow)
```

**Key Features:**
- Detailed content display
- Multiple action buttons
- Progress bar at bottom

## 🎨 **Design System**

### **Color Palette**
```css
/* Primary Blue */
--primary-blue: #00f2fa;

/* Secondary Pink */
--secondary-pink: #FF007F;

/* Background */
--background: #000000;

/* Text Colors */
--text-white: #FFFFFF;
--text-gray: #6B7280;
```

### **Glow Effects**
```css
/* Blue Glow */
box-shadow: 0 0 10px #00f2fa, 0 0 20px #00f2fa;

/* Pink Glow */
box-shadow: 0 0 10px #FF007F, 0 0 20px #FF007F;

/* Text Glow */
text-shadow: 0 0 10px #00f2fa, 0 0 20px #00f2fa;

/* Subtle Glow */
box-shadow: 0 0 3px #00f2fa;
```

### **Button Styling**
```jsx
// Primary Action Button
<button
  className="px-6 py-3 text-base rounded-lg border-2 hover:bg-gray-800 transition-colors"
  style={{
    color: '#00f2fa',
    borderColor: '#00f2fa',
    backgroundColor: 'transparent',
    width: '200px',
    boxShadow: '0 0 10px #00f2fa, 0 0 20px #00f2fa'
  }}
>
  Button Text
</button>

// Back Navigation Button
<button
  className="px-6 py-3 text-base rounded-lg border-2 hover:bg-gray-800 transition-colors"
  style={{
    color: '#FF007F',
    borderColor: '#FF007F',
    backgroundColor: 'transparent',
    width: '200px',
    boxShadow: '0 0 10px #FF007F, 0 0 20px #FF007F'
  }}
>
  Back to Previous
</button>
```

## 📊 **Progress Bar Component**

### **Implementation**
```jsx
<ProgressBar 
  currentStep={2} 
  totalSteps={4} 
  steps={['Topic', 'Introduction', 'Overview', 'Detail']} 
/>
```

### **Features**
- **Minimal design** with no text labels
- **Thin progress bar** (h-0.5) with subtle glow
- **Small step indicators** (w-4 h-4) without text
- **Compact width** (max-w-md)
- **Positioned at bottom** of all pages
- **Subtle glow effects** on border and indicators

## 🎬 **Video Window Template**

### **Placeholder Structure**
```jsx
<div className="mb-8">
  <div className="relative w-full max-w-2xl mx-auto">
    <div className="aspect-video bg-gray-900 rounded-lg border-2 border-gray-700 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🎥</div>
        <p className="text-lg text-gray-400">Introduction Video</p>
        <p className="text-sm text-gray-500 mt-2">Coming Soon</p>
      </div>
    </div>
  </div>
</div>
```

## 📁 **File Structure**

### **Component Files**
```
src/components/
├── OneTrueGodIntro.js     # Introduction page template
├── NamesOfAllah.js        # Overview page template  
├── NameDetail.js          # Detail page template
├── ProgressBar.js         # Progress bar component
└── WheelOfIslam.js        # Main wheel component
```

### **Routing Structure**
```jsx
// App.js routes
<Routes>
  <Route path="/" element={<WheelOfIslam />} />
  <Route path="/topic-intro" element={<TopicIntro />} />
  <Route path="/topic-overview" element={<TopicOverview />} />
  <Route path="/topic-detail/:id" element={<TopicDetail />} />
</Routes>
```

## 🔧 **Implementation Guidelines**

### **For New Topics**

1. **Create Introduction Component**
   - Copy `OneTrueGodIntro.js` structure
   - Update title, subtitle, and content
   - Maintain same button layout and styling
   - Use blue colors with glow effects for titles

2. **Create Overview Component**
   - Copy `NamesOfAllah.js` structure
   - Update content grid/list
   - Maintain same navigation pattern
   - Use blue colors with glow effects for titles

3. **Create Detail Component**
   - Copy `NameDetail.js` structure
   - Update content display
   - Maintain same button layout

4. **Update Routing**
   - Add new routes in `App.js`
   - Update wheel navigation in `WheelOfIslam.js`

5. **Update Wheel Topics**
   - Add new topic to `askTopics` array in `WheelOfIslam.js`
   - Use unique colors for each topic
   - Maintain transparent backgrounds for neon theme

### **Consistent Elements**
- **Progress bar** at bottom of all pages (minimal design)
- **Button styling** with glow effects
- **Color scheme** (blue/pink)
- **Layout structure** (header → content → buttons → progress)
- **Responsive design** (mobile-first)
- **Blue titles and subtitles** with glow effects
- **Increased spacing** between content and buttons (`mt-12 mb-12`)
- **Transparent backgrounds** for wheel topics in neon theme

## 🎯 **User Experience Flow**

### **Navigation Pattern**
1. **Wheel Selection** → Topic Introduction
2. **Introduction** → Topic Overview  
3. **Overview** → Topic Detail
4. **Detail** → Quiz (future) or back navigation

### **Button Hierarchy**
- **Primary Actions**: Blue, positioned first
- **Secondary Actions**: Blue, positioned second
- **Back Navigation**: Red, positioned last

### **Progress Indication**
- **Visual progress bar** with percentage
- **Step indicators** with current/completed/upcoming states
- **Consistent positioning** at bottom of pages

## 📝 **Content Guidelines**

### **Introduction Page Content**
- **Clear title** with blue glow effect
- **Descriptive subtitle** in blue with glow effect
- **Video placeholder** for future content
- **Brief explanation** of what users will learn

### **Overview Page Content**
- **Grid or list layout** for content items
- **Clickable items** that lead to detail pages
- **Clear navigation** back to introduction
- **Blue titles** with glow effects

### **Detail Page Content**
- **Focused content display**
- **Multiple action options** (More, Quiz)
- **Clear back navigation**

## 🚀 **Future Enhancements**

### **Planned Features**
- **Quiz functionality** for each topic
- **Video integration** in introduction pages
- **Interactive elements** in detail pages
- **Progress tracking** across topics
- **Personalization** based on user goals

### **Scalability**
- **Template system** for easy topic addition
- **Content management** system
- **Dynamic routing** based on topic selection
- **Analytics tracking** for user engagement

---

**This design system ensures consistency, scalability, and excellent user experience across all topic flows in the Wheel of Islam application.** 