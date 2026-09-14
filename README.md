# Pepe's Mobile Detail — Livermore, CA

## 🚗 Live Site
**https://pepes-mobile-detail.vercel.app**

## 📋 Business Profile
- **Owner:** Andrew Carrier
- **Location:** Livermore, CA 94551
- **Phone:** (925) 518-5055
- **Yelp:** 5.0★ (117 reviews)
- **Current site:** pepedagreat.wix.com/pepesmobiledetail (free Wix)
- **Price tier:** $ — affordable, family-oriented

## 🎯 Key Features
- Drag-to-compare before/after gallery with real images
- Yelp 5.0★ review integration (117 reviews)
- 6 service packages: Wash & Wax → Premium Detail → Ceramic Coating (coming soon)
- "How It Works" 3-step flow
- Tri-Valley service area map
- Click-to-call and click-to-text mobile CTAs
- Full SEO metadata with structured data (LocalBusiness schema)
- Mobile-first responsive design
- Gold + charcoal premium color scheme

## 🏗️ Stack
- Next.js 16.3 (App Router)
- TypeScript
- Tailwind CSS v4
- Lucide React icons
- Zero dependencies beyond the stack

## 📁 Structure
```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # SEO, structured data, metadata
│   │   ├── page.tsx            # Page section order
│   │   └── globals.css         # Tailwind v4 theme tokens
│   ├── components/
│   │   ├── Header.tsx          # Sticky nav with mobile menu
│   │   ├── Hero.tsx            # Hero + Yelp badge + CTAs
│   │   ├── HowItWorks.tsx      # 3-step "Call → We Come → Relax"
│   │   ├── Services.tsx        # 6 service packages (data-driven)
│   │   ├── Gallery.tsx         # Drag-before/after slider
│   │   ├── Reviews.tsx         # 4 testimonials + Yelp stats
│   │   ├── ServiceArea.tsx     # Tri-Valley ZIP codes
│   │   ├── About.tsx           # Andrew's story + value props
│   │   ├── FAQ.tsx             # 8 Q&As
│   │   ├── ContactForm.tsx     # Quote request form
│   │   ├── MobileCTA.tsx       # Sticky mobile call/text bar
│   │   └── Footer.tsx          # Contact info + social links
│   └── lib/
│       ├── data.ts             # ← Single customization file
│       └── animations.ts       # IntersectionObserver hooks
```

## 🔧 Customization
Edit **`src/lib/data.ts`** — all business info, services, reviews, FAQ, and contact data live in one file. Change the business, change the whole site.

## 🚀 Deploy
1. Push to GitHub
2. Connect to Vercel
3. Site goes live automatically

## 💡 For Future Prospects
This is a **Pepe's-tailored demo**. To create a new prospect site:
1. Copy this repo
2. Edit `src/lib/data.ts` with the new client's info
3. Update `layout.tsx` metadata/structured data
4. Push and deploy
5. Done in <30 minutes

## 🔗 Links
- **Repo:** https://github.com/raine-yen/auto-detailing-template
- **Template:** https://auto-detailing-template-r7t26b8qb.vercel.app
- **Pepe's (old):** http://www.pepedagreat.wix.com/pepesmobiledetail
- **Pepe's Yelp:** https://www.yelp.com/biz/pepes-mobile-detail-livermore
