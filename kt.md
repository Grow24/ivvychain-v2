# IVYCHAIN v2 - Knowledge Transfer Guide

## What is IVYCHAIN?

IVYCHAIN (Integrated Business Performance Improvement) is a **business analytics dashboard** that provides comprehensive insights into sales, products, customers, and market performance. It helps businesses track KPIs, analyze trends, and make data-driven decisions.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Recharts (charts), Axios (API calls)
- **Backend**: Node.js, Express.js with mock data generators
- **Port Configuration**: Frontend (3000), Backend (3001)

## First-Time Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

**1. Clone and Install Frontend**

```bash
cd ivvychain-v2
npm install
```

**2. Install Backend**

```bash
cd backend
npm install
```

**3. Start Development Servers**

Terminal 1 - Frontend:

```bash
cd ivvychain-v2
npm start
```

Terminal 2 - Backend:

```bash
cd backend
npm run dev
```

**4. Access Application**

- Open browser: `http://localhost:3000`
- Default login credentials: Any email/password (mock authentication)

## Project Architecture

```
ivvychain-v2/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── shared/       # Common components (cards, charts, tables)
│   │   └── *Section.js   # Dashboard section components
│   ├── pages/            # Main pages (WHO/WHAT/HOW modules)
│   ├── hooks/            # Custom React hooks
│   └── utils/            # Helper functions
└── backend/
    └── src/
        ├── server.js          # Express server & API routes
        ├── mockData.js        # Mock data generators
        └── dashboardRegistry.js  # Dashboard configurations
```

## Key Features & Modules

### 1. **WHO Module** - Customer Analytics

- Accounts, Channel Partners, Consumers, Leads, Segments

### 2. **WHAT Module** - Product/Market Analysis

- Industry Groups, Product Groups, Territories

### 3. **HOW Module** - Performance Tracking

- Employee Performance, Channel Analysis, Campaign Tracking

### 4. **Environment Scanning**

- PESTEL analysis (Political, Economic, Social, Tech, Environmental, Legal)
- Venn diagram visualization
- Strategic checklists

### 5. **Business Performance Dashboard**

- Filter Panel (Date, Customer, Product, Territory)
- KPI Highlights (Revenue, Growth, Orders)
- Treemaps, Monthly Trends, Sales Analytics
- ABC Analysis (Product/Customer classification)

## How It Works

### Data Flow

1. User applies filters in Filter Panel
2. React components make POST requests to backend
3. Backend generates mock data based on filters
4. Charts/tables update with new data
5. All changes use debouncing for performance

### Navigation

- **Sidebar**: Main navigation (collapsible)
- **Header**: User profile, highlights modal
- **Right Sidebar**: Chat panel & annotations
- **Pages**: Rendered dynamically based on `activePage` state

### Authentication

- Mock authentication system
- Login status stored in `localStorage`
- Key: `ivychain_authenticated`

## Common Tasks for Interns

### Adding a New Dashboard Section

1. Create component in `src/components/[Name]Section.js`
2. Import in parent page (e.g., `BusinessPerformance.js`)
3. Add API endpoint in `backend/src/server.js`
4. Generate mock data in `backend/src/mockData.js`

### Adding a New Page

1. Create page file in `src/pages/[ModuleName]/[PageName].js`
2. Import in `App.js`
3. Add route case in `renderPage()` function
4. Update sidebar navigation in `Sidebar.js`

### Modifying Filters

- Edit `FilterPanel.js` for UI changes
- Update API calls in respective section components
- Modify mock data logic in backend

## API Endpoints Quick Reference

| Endpoint                  | Purpose                |
| ------------------------- | ---------------------- |
| `/api/highlights`         | Dashboard KPIs         |
| `/api/quick-overview`     | Overview charts        |
| `/api/item-group-treemap` | Treemap visualizations |
| `/api/monthly-trends`     | Trend analysis         |
| `/api/sales-overview`     | Sales charts           |
| `/api/product-abc`        | ABC classification     |

All endpoints accept POST requests with filter parameters.

## Useful Commands

```bash
# Start both servers concurrently
npm start (frontend) + npm run dev (backend)

# Build for production
npm run build

# Clear cache
rm -rf node_modules package-lock.json && npm install
```

## Tips & Best Practices

✓ **Always run backend first** - Frontend depends on API  
✓ **Check browser console** - React error messages appear here  
✓ **Use React DevTools** - Install extension for debugging  
✓ **Debouncing** - Filter changes wait 500ms before API call  
✓ **Mock Data** - All data is randomly generated, not from real DB  
✓ **Responsive Design** - Use Tailwind classes for styling

## Troubleshooting

**Port Already in Use**

```bash
# Kill process on port 3000/3001
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

**API Not Responding**

- Verify backend is running on port 3001
- Check `package.json` proxy setting: `"proxy": "http://localhost:3001"`

**Charts Not Displaying**

- Ensure Recharts library is installed
- Check mock data format matches chart expectations

## Need Help?

- Check existing component implementations for examples
- Review `README.md` files in root and backend folders
- API responses can be inspected in browser Network tab

---

**Last Updated**: February 2026  
**Version**: 2.0
