import countriesB from './countriesB';
import countriesC from './countriesC';

const countriesBase = [
  {
    id: "usa",
    name: "United States",
    officialName: "United States of America · Federal Government",
    flagCode: "us",
    isoNumeric: 840,
    fiscalYear: "Fiscal Year 2024",
    fiscalPeriod: "Oct 1, 2023 – Sep 30, 2024",
    currency: { symbol: "$", code: "USD", prefix: "$", suffix: "B" },
    gdpNote: "GDP ~$28.68T (BEA)",
    sourceNote: "All figures in $ Billion (USD) · Source: U.S. Treasury & CBO Final Actuals",
    kpis: {
      receipts: { label: "Total Receipts", value: "$4.92T", note: "17.1% of GDP · +11% vs FY2023" },
      outlays: { label: "Total Outlays", value: "$6.75T", note: "23.4% of GDP · +10% vs FY2023" },
      balance: { label: "Budget Deficit", value: "$1.83T", note: "6.4% of GDP · 3rd largest in history", type: "deficit" },
      debt: { label: "Public Debt", value: "97.3%", note: "~$28T held by public · $35.5T gross" },
    },
    indexCard: {
      description: "Federal budget detailed by Mandatory and Discretionary spending. Features historical net interest milestone and deep dive into social insurance funding.",
      tags: [
        { text: "Outlays: $6.75T (23.4% GDP)", color: "navy" },
        { text: "Deficit: 6.4%", color: "red" },
      ],
    },
    receipts: {
      panelNote: "Max = $2.43T (Individual Income Tax) · Total $4.92T",
      groups: [
        { name: "Income Taxes", items: [
          { label: "Individual Income Tax", sub: "Wages, capital gains, dividends, pass-throughs", val: 2426, gdp: 8.5 },
          { label: "Corporate Income Tax", sub: "21% flat rate on corporate profits", val: 530, gdp: 1.8 },
        ]},
        { name: "Social Insurance Taxes (Payroll)", items: [
          { label: "Social Insurance & Retirement", sub: "Social Security 12.4% + Medicare 2.9% of wages", val: 1708, gdp: 6.0 },
        ]},
        { name: "Excise & Other Taxes", items: [
          { label: "Excise Taxes", sub: "Fuel, alcohol, tobacco, aviation, phone", val: 101, gdp: 0.4 },
          { label: "Customs Duties", sub: "Tariffs on imported goods", val: 77, gdp: 0.3 },
          { label: "Estate & Gift Taxes", sub: "Federal estate tax above $13.6M exemption", val: 32, gdp: 0.1 },
          { label: "Miscellaneous", sub: "Federal Reserve remittances, fees, fines", val: 44, gdp: 0.2 },
        ]},
      ],
      methodNote: "Note on payroll taxes: Social Insurance & Retirement receipts ($1.71T) include Social Security taxes (12.4% of wages up to $168,600, split 6.2%/6.2% employer/employee), Medicare taxes (2.9% of all wages, no cap), and smaller railroad retirement & unemployment insurance taxes.",
    },
    deficitFinancing: { label: "Deficit Financing", sub: "Treasury bonds, bills & notes issued to public", value: "$1.83T", gdpNote: "6.4% GDP", pct: 75.5 },
    totalLabel: "Total Resources Available",
    totalValue: "$6.75T",
    outlays: {
      panelNote: "Max = $1.46T (Social Security) · Total $6.75T",
      groups: [
        { name: "Mandatory — Social Insurance", items: [
          { label: "Social Security", sub: "Retirement, disability & survivors · 71M beneficiaries", val: 1461, gdp: 5.1 },
          { label: "Health (Medicaid, CHIP, ACA)", sub: "Federal share of Medicaid + CHIP + ACA subsidies", val: 912, gdp: 3.2 },
          { label: "Medicare", sub: "Hospital insurance (Part A) + medical (B) + drug (D)", val: 874, gdp: 3.0 },
          { label: "Income Security", sub: "SNAP, housing, EITC/CTC outlays, SSI, fed. retirement", val: 671, gdp: 2.3 },
          { label: "Veterans Benefits", sub: "Disability pay, VA pensions, GI Bill, VA health", val: 325, gdp: 1.1 },
        ]},
        { name: "Debt Service", items: [
          { label: "Net Interest", sub: "Interest on ~$28T public debt · surpassed defense", val: 881, gdp: 3.1 },
        ]},
        { name: "Discretionary — Defense", items: [
          { label: "National Defense", sub: "DoD operations, personnel, procurement, R&D", val: 874, gdp: 3.0 },
        ]},
        { name: "Discretionary — Non-Defense", items: [
          { label: "Education, Training & Social Svcs", sub: "Note: inflated by student loan accounting (~$80-90B real)", val: 305, gdp: 1.1 },
          { label: "Transportation", sub: "Federal highways, transit, aviation, rail, maritime", val: 137, gdp: 0.5 },
          { label: "Administration of Justice", sub: "FBI, courts, federal prisons, border enforcement", val: 85, gdp: 0.3 },
          { label: "International Affairs", sub: "State Dept., foreign aid, international finance", val: 72, gdp: 0.3 },
          { label: "Natural Resources & Environment", sub: "EPA, Interior Dept., Army Corps of Engineers", val: 57, gdp: 0.2 },
          { label: "General Science, Space & Tech", sub: "NASA, NSF, other federal R&D agencies", val: 42, gdp: 0.1 },
          { label: "Agriculture", sub: "Farm subsidies, crop insurance, rural development", val: 35, gdp: 0.1 },
          { label: "General Government & Other", sub: "Congress, courts, IRS, Treasury admin, energy, community dev.", val: 192, gdp: 0.7 },
        ]},
      ],
      totalLabel: "Total Expenditure",
      totalValue: "$6.75T",
      methodNote: "Mandatory vs. Discretionary: M = mandatory spending (set by law, not annual vote) = ~61% of outlays. D = discretionary (voted annually by Congress) = ~26%. Net interest = ~13%. Social Security, Medicare, and Medicaid alone consume 48% of all federal spending.",
    },
    callouts: [
      { icon: "📈", title: "Net Interest Hit $881B — A Historic Milestone", text: "For the first time in US history, net interest payments on the federal debt exceeded $880B in FY2024, surpassing both Medicare and national defense spending. This is purely the cost of servicing ~$28 trillion in debt held by the public at an average interest rate that has risen sharply since 2022. By 2051, CBO projects interest will become the single largest line item in the federal budget.", tag: { text: "Interest: 13% of all outlays", color: "grey" } },
      { icon: "👴", title: "Social Security + Medicare = $2.33 Trillion", text: "These two programs alone — Social Security ($1.46T) and Medicare ($874B) — account for 34.6% of all federal spending. Both are funded through dedicated payroll taxes but increasingly rely on general revenues as aging Baby Boomers strain trust fund balances. Social Security's trust fund is projected to be depleted by ~2033 without legislative action, triggering automatic 21% benefit cuts.", tag: { text: "34.6% of all federal spending", color: "red" } },
      { icon: "⚕️", title: "Health Spending: $1.79 Trillion Total", text: "Adding Medicare ($874B) to the \"Health\" function (Medicaid, CHIP, ACA subsidies — $912B) gives total federal health spending of $1.79 trillion, or 26.5% of all outlays. The US spends more on healthcare per capita than any other high-income country, yet lacks universal coverage.", tag: { text: "Health + Medicare: 26.5% of outlays", color: "red" } },
      { icon: "🛡️", title: "Defense: $874B — But True Security Cost Is Higher", text: "The National Defense function ($874B) covers DoD operations, personnel, procurement, and R&D. Adding Veterans Benefits ($325B) and nuclear weapons (in Energy), intelligence, and homeland security brings total \"national security\" expenditure to roughly $1.3 trillion. Defense is ~13% of outlays but ~3% of GDP — far below Cold War peaks of 9–10% of GDP.", tag: { text: "Defense: 13% of outlays · 3% of GDP", color: "navy" } },
      { icon: "💰", title: "Individual Income Tax Dominates Revenue", text: "At $2.43T, individual income taxes account for 49% of all federal receipts — nearly half the entire revenue base. The US collects relatively little from consumption taxes (VAT = $0; excise taxes only $101B), unlike most OECD countries.", tag: { text: "Income tax: 49% of all receipts", color: "navy" } },
      { icon: "📚", title: "Education Figure Is Distorted by Student Loans", text: "The $305B Education function looks large but is heavily distorted. In FY2023 the Biden administration reversed $330B in student loan cancellation accounting entries; in FY2024 this created a large paper increase. Actual cash spending on education programs (Pell grants, K-12 Title I, etc.) is far smaller — roughly $80-90B.", tag: { text: "Actual cash education: ~$80-90B", color: "teal" } },
    ],
    footnotes: {
      sources: "Primary sources: U.S. Treasury Bureau of the Fiscal Service — Combined Statement of Receipts, Outlays, and Balances FY2024; Congressional Budget Office — Monthly Budget Review: Summary for Fiscal Year 2024; KFF — What Does the Federal Government Spend on Health Care?; Center on Budget and Policy Priorities — Where Do Our Federal Tax Dollars Go?; Committee for a Responsible Federal Budget — FY2024 Ends with $1.8 Trillion Deficit.",
      methodology: "All figures are actual FY2024 outlays and receipts from official Treasury final accounts, not estimates or projections. GDP reference: ~$28.68 trillion (BEA). The \"Health\" function ($912B) covers Medicaid, CHIP, and ACA marketplace subsidies; Medicare is reported separately. \"Income Security\" ($671B) includes SNAP, housing assistance, EITC, child tax credit outlays, SSI, and federal employee/military retirement. Net Interest ($881B) is net of interest income. Fiscal year runs October 1 – September 30.",
    },
  },
  {
    id: "uk",
    name: "United Kingdom",
    officialName: "United Kingdom · HM Government",
    flagCode: "gb",
    isoNumeric: 826,
    fiscalYear: "Financial Year 2023–24",
    fiscalPeriod: "Apr 1, 2023 – Mar 31, 2024",
    currency: { symbol: "£", code: "GBP", prefix: "£", suffix: "B" },
    gdpNote: "GDP ~£2.75T (ONS)",
    sourceNote: "All figures in £ Billion (GBP) · Source: HM Treasury PESA & OBR",
    kpis: {
      receipts: { label: "Total Receipts", value: "£1.10T", note: "39.9% of GDP" },
      outlays: { label: "Total Outlays", value: "£1.19T", note: "43.2% of GDP" },
      balance: { label: "Budget Deficit", value: "£92B", note: "3.3% of GDP", type: "deficit" },
      debt: { label: "Public Debt", value: "98.6%", note: "~£2.7T · risen sharply since pandemic" },
    },
    indexCard: {
      description: "Analysis of HM Treasury PESA outturn data. Highlights the dominance of NHS expenditure, State Pension triple-lock, and post-crisis debt interest.",
      tags: [
        { text: "Outlays: £1.19T (43.2% GDP)", color: "navy" },
        { text: "Deficit: 3.3%", color: "red" },
      ],
    },
    receipts: {
      panelNote: "Max = £279B (Income Tax) · Total £1.10T",
      groups: [
        { name: "Direct Taxes on Income", items: [
          { label: "Income Tax", sub: "PAYE + self-assessment; 20%/40%/45% bands", val: 279, gdp: 10.1 },
          { label: "National Insurance", sub: "Employees 10–12% + employers 13.8% of wages", val: 178, gdp: 6.5 },
          { label: "Corporation Tax", sub: "25% main rate from Apr 2023 (up from 19%)", val: 86, gdp: 3.1 },
        ]},
        { name: "Taxes on Spending", items: [
          { label: "VAT", sub: "20% standard rate · 5% reduced · 0% zero", val: 168, gdp: 6.1 },
          { label: "Fuel Duty", sub: "Frozen at 52.95p/litre; 5p cut maintained", val: 25, gdp: 0.9 },
          { label: "Other Excise Duties", sub: "Alcohol, tobacco, air passenger duty, gaming", val: 32, gdp: 1.2 },
        ]},
        { name: "Taxes on Property & Wealth", items: [
          { label: "Council Tax", sub: "Set by local authorities; avg ~£2,000/year", val: 40, gdp: 1.5 },
          { label: "Business Rates", sub: "Non-domestic rates on commercial property", val: 26, gdp: 0.9 },
          { label: "Stamp Duty Land Tax", sub: "Property transactions; fell 24% on cooling mkt", val: 12, gdp: 0.4 },
          { label: "Other Taxes & Fees", sub: "Inheritance tax, CGT, customs, misc. receipts", val: 51, gdp: 1.9 },
        ]},
      ],
      methodNote: "Note on National Insurance: NICs are formally a social insurance contribution but in the UK they flow directly into the Consolidated Fund and are not hypothecated — they do not fund a dedicated pension or health pot. They are effectively an income tax on employment with a different name and rate structure.",
    },
    deficitFinancing: { label: "Deficit Financing (PSNB)", sub: "Gilt issuance + Treasury bills to bond markets", value: "£92B", gdpNote: "3.3% GDP", pct: 33.0 },
    totalLabel: "Total Resources Available",
    totalValue: "£1.19T",
    outlays: {
      panelNote: "Max = £185B (NHS/Health) · Total £1.19T",
      groups: [
        { name: "Health", items: [
          { label: "NHS & Health", sub: "NHS England (~£177B) + devolved health budgets", val: 185, gdp: 6.7 },
        ]},
        { name: "Social Security — Pensioners", items: [
          { label: "State Pension", sub: "Triple lock · £221.20/week from Apr 2024", val: 124, gdp: 4.5 },
          { label: "Pension Credit & Other", sub: "Means-tested top-up + winter fuel payment", val: 12, gdp: 0.4 },
        ]},
        { name: "Social Security — Working Age & Children", items: [
          { label: "Universal Credit", sub: "£51B UC + £30B legacy benefits in transition", val: 81, gdp: 2.9 },
          { label: "Disability Benefits", sub: "PIP, DLA, attendance allowance", val: 35, gdp: 1.3 },
          { label: "Housing Benefit", sub: "Legacy HB for pensioners + some working age", val: 20, gdp: 0.7 },
          { label: "Child Benefit & Tax Credits", sub: "Universal child benefit + remaining tax credits", val: 19, gdp: 0.7 },
        ]},
        { name: "Debt Service", items: [
          { label: "Debt Interest", sub: "RPI-linked gilts esp. costly; peaked 2022-23", val: 110, gdp: 4.0 },
        ]},
        { name: "Public Services (DEL)", items: [
          { label: "Education", sub: "Schools, FE, HE, skills — central + local", val: 115, gdp: 4.2 },
          { label: "Local Government", sub: "Revenue support grants + ring-fenced grants", val: 65, gdp: 2.4 },
          { label: "Defence", sub: "Armed forces, equipment, nuclear deterrent", val: 52, gdp: 1.9 },
          { label: "Transport", sub: "Highways, rail (incl. Network Rail debt), HS2", val: 30, gdp: 1.1 },
          { label: "Home Office, Justice & Policing", sub: "Police, courts, prisons, immigration", val: 30, gdp: 1.1 },
          { label: "Capital Investment", sub: "Public sector net investment: schools, roads, hospitals", val: 60, gdp: 2.2 },
          { label: "Other Departments", sub: "DWP admin, FCDO, HMRC, DSIT, environment, culture", val: 51, gdp: 1.9 },
        ]},
      ],
      totalLabel: "Total Managed Expenditure",
      totalValue: "£1.19T",
      methodNote: "DEL vs AME: UK spending is split into Departmental Expenditure Limits (DEL) — firm multi-year departmental budgets — and Annually Managed Expenditure (AME), which is demand-driven: social security, debt interest, and devolved block grants. AME is ~£500B; DEL is ~£600B.",
    },
    callouts: [
      { icon: "🏥", title: "The NHS: The Dominant Spending Item", text: "At ~£185B for health in total, healthcare is by far the single largest expenditure function — around 1 in every 6 pounds of all public spending. The NHS is free at the point of use, funded entirely from general taxation with no insurance premium.", tag: { text: "NHS: ~£177B for England alone", color: "red" } },
      { icon: "👵", title: "State Pension: The Largest Single Benefit", text: "The State Pension cost £124B in 2023-24. The \"triple lock\" guarantee (rises by whichever is highest: inflation, earnings, or 2.5%) has driven sustained above-inflation increases. The full new State Pension is £221.20/week.", tag: { text: "Triple lock · £124B · flat-rate PAYG", color: "gold" } },
      { icon: "📊", title: "Debt Interest: £110B After RPI-Linked Gilt Crisis", text: "Debt interest jumped from £43B in 2018-19 to ~£110B in 2023-24. The UK has a large proportion of index-linked gilts (tied to RPI inflation), which became extremely expensive when inflation hit 11%.", tag: { text: "£110B · 10% of spending · RPI-linked", color: "grey" } },
      { icon: "💼", title: "NICs: A Tax in All But Name", text: "National Insurance Contributions (£177.7B) are nominally a social insurance contribution but are not hypothecated. The UK raises relatively little from NICs as a share of GDP compared to continental Europe.", tag: { text: "£177.7B · not hypothecated · 6.5% GDP", color: "navy" } },
      { icon: "🏘️", title: "Universal Credit: One Benefit to Rule Them All", text: "Universal Credit (£51B) is replacing six legacy means-tested benefits. The rollout is now ~95% complete. UC was designed to make work pay by tapering benefits at 55p for every £1 earned.", tag: { text: "UC: £51B · 6 benefits merged into 1", color: "teal" } },
      { icon: "🗳️", title: "Devolved Spending & the Barnett Formula", text: "Scotland, Wales, and Northern Ireland receive block grants calculated by the Barnett Formula. The grants (~£45B combined in 2023-24) are shown within education, health, and other functional categories.", tag: { text: "Barnett Formula · ~£45B block grants", color: "navy" } },
    ],
    footnotes: {
      sources: "Primary sources: HMRC Tax Receipts and National Insurance Contributions for the UK, Annual Bulletin (2023-24 outturn); HM Treasury Public Expenditure Statistical Analyses (PESA 2024); Office for Budget Responsibility (OBR) — Economic and Fiscal Outlook March 2024; Institute for Fiscal Studies — What Does the Government Spend Money On?",
      methodology: "The UK financial year runs April to March. Receipts total (~£1.10T) is public sector current receipts (PSCR). Total Managed Expenditure (TME = £1.19T) is from PESA 2024 outturn. Deficit is Public Sector Net Borrowing (PSNB) ~£92B. GDP reference: ~£2.75T (2023-24, ONS).",
    },
  },
  {
    id: "china",
    name: "China",
    officialName: "People's Republic of China · National General Public Budget",
    flagCode: "cn",
    isoNumeric: 156,
    fiscalYear: "Fiscal Year 2024",
    fiscalPeriod: "Jan 1 – Dec 31, 2024",
    currency: { symbol: "¥", code: "CNY", prefix: "¥", suffix: "T", divisor: 1000 },
    gdpNote: "GDP ~¥136.5T nominal",
    sourceNote: "All figures in ¥ Billion (CNY) · Source: MoF, NBS, NPC Budget Report",
    kpis: {
      receipts: { label: "Total Revenue", value: "¥24.5T", note: "18.0% of GDP · GPB only" },
      outlays: { label: "Total Expenditure", value: "¥28.6T", note: "20.5% of GDP" },
      balance: { label: "Official Deficit", value: "¥4.1T", note: "3.0% of GDP · Broad deficit ~6.5%", type: "deficit" },
      debt: { label: "Public Debt", value: "~67%", note: "Official; local hidden debt est. ¥50–65T" },
    },
    indexCard: {
      description: "National General Public Budget overview. Explores heavy central-local fiscal transfers, record agricultural spending, and the real underlying deficit.",
      tags: [
        { text: "Outlays: ¥28.6T (20.5% GDP)", color: "navy" },
        { text: "Deficit: 3.0%", color: "red" },
      ],
    },
    receipts: {
      panelNote: "Max = ¥7.1T (VAT) · Total ¥24.5T",
      groups: [
        { name: "Value-Added & Goods Taxes", items: [
          { label: "Value-Added Tax (VAT)", sub: "13% standard, 9% food/utilities, 6% services", val: 7100, gdp: 5.2 },
          { label: "Consumption Tax", sub: "Excise on tobacco, alcohol, cars, fuel, jewellery", val: 1600, gdp: 1.2 },
        ]},
        { name: "Income Taxes", items: [
          { label: "Corporate Income Tax", sub: "25% standard; 15% for high-tech & small enterprise", val: 4000, gdp: 2.9 },
          { label: "Personal Income Tax", sub: "Progressive 3–45%; capital gains taxed separately", val: 1550, gdp: 1.1 },
        ]},
        { name: "Trade & Other Taxes", items: [
          { label: "Customs Duties", sub: "Import tariffs; strategic reductions post-WTO", val: 840, gdp: 0.6 },
          { label: "Other Taxes", sub: "Stamp duty, land use, resource tax, urban construction", val: 2410, gdp: 1.8 },
        ]},
        { name: "Non-Tax Revenue", items: [
          { label: "Non-Tax Revenue", sub: "Central dept. special proceeds, admin fees, state dividends", val: 4470, gdp: 3.3 },
        ]},
      ],
      methodNote: "China's four-budget system: This report covers the National General Public Budget (GPB) only. China operates three additional budgets: Government-Managed Funds (land-sale revenue), State Capital Operations (SOE dividends), and Social Insurance Funds (pension & healthcare contributions). The official 3% deficit applies only to the GPB. Economists estimate the broad deficit at ~6.5% of GDP.",
    },
    deficitFinancing: { label: "Deficit Financing", sub: "Central treasury bonds + local special bonds + ¥1T ultra-long bonds", value: "¥4.1T", gdpNote: "3.0% GDP", pct: 57.7 },
    totalLabel: "Total Resources Available",
    totalValue: "¥28.6T",
    outlays: {
      panelNote: "Max = ¥4.21T (Social Security) · Total ¥28.6T",
      groups: [
        { name: "Social Spending", items: [
          { label: "Social Security & Employment", sub: "Pensions, unemployment insurance, employment subsidies", val: 4211, gdp: 3.1 },
          { label: "Education", sub: "K-12, higher education, vocational, rural schools", val: 4170, gdp: 3.1 },
          { label: "Health & Sanitation", sub: "Public health programs, hospital subsidies; –9% COVID normalization", val: 2000, gdp: 1.5 },
        ]},
        { name: "Infrastructure & Development", items: [
          { label: "Urban & Rural Communities", sub: "Urban infrastructure, utilities, rural revitalization", val: 2174, gdp: 1.6 },
          { label: "Agriculture, Forestry & Water", sub: "Food security, flood control, irrigation — record +12.7%", val: 2705, gdp: 2.0 },
          { label: "Transportation", sub: "Highways, railways, airports, ports — slight –1%", val: 880, gdp: 0.6 },
        ]},
        { name: "Defence, Security & Science", items: [
          { label: "National Defence", sub: "PLA: personnel, equipment, procurement, R&D; +7.2%", val: 1665, gdp: 1.2 },
          { label: "Science & Technology", sub: "Strategic R&D, basic research, semiconductor & AI; +6%", val: 1000, gdp: 0.7 },
        ]},
        { name: "Debt & Administration", items: [
          { label: "Debt Interest Payments", sub: "Service on central government bonds; +8.8%", val: 1300, gdp: 1.0 },
          { label: "General Government & Other", sub: "Administration, public security, housing, energy, culture", val: 4495, gdp: 3.3 },
        ]},
      ],
      totalLabel: "Total Expenditure",
      totalValue: "¥28.6T",
      methodNote: "Central vs. local spending: Of the ¥28.6T total, only ¥4.1T was direct central government spending; the remaining ¥24.4T was local government spending. This extreme fiscal decentralization — where locals execute ~85% of spending — is a defining feature of China's public finance.",
    },
    callouts: [
      { icon: "🎓", title: "Education: China's Largest Budget Line for a Decade", text: "For over a decade, education has been the single largest line item. The ¥4.17T allocation covers compulsory education, rural school construction, vocational training, universities, and scholarships.", tag: { text: "Education: 14.6% of all GPB spending", color: "red" } },
      { icon: "🌾", title: "Agriculture Spending Surged 12.7% — a Record High", text: "Spending on agriculture jumped nearly 13% to ¥2.7T in 2024, driven by rural revitalization programs, flood control, irrigation upgrades, and food security investments.", tag: { text: "Agriculture: +12.7% · All-time record ¥2.70T", color: "teal" } },
      { icon: "💊", title: "Healthcare Fell 9% — COVID Normalization", text: "Health expenditure fell over 9% to ~¥2.0T. This is actually a normalization: 2022–2023 saw massively elevated spending due to COVID testing, quarantine, and vaccination campaigns.", tag: { text: "Health: ¥2.0T · COVID normalization", color: "grey" } },
      { icon: "🛡️", title: "Defence: Official 1.3% of GDP — But Actual Is Debated", text: "China's official defence budget was ¥1.665T ($231B), a 7.2% increase. Independent estimates diverge: SIPRI estimates ~$309B; a RAND study estimates ~$471B accounting for off-budget R&D and paramilitary spending.", tag: { text: "Official: ¥1.67T · estimates: $295–471B", color: "grey" } },
      { icon: "💸", title: "The Hidden Deficit: Land Sales Collapse", text: "The official 3% deficit masks true fiscal strain. The Government-Managed Funds budget saw receipts fall 10.5% to ¥7.3T as the property crisis continued. PIIE estimates the broad deficit at ~6.5% of GDP.", tag: { text: "Broad deficit: ~6.5% GDP", color: "red" } },
      { icon: "🔬", title: "Science & Technology: Strategic Priority", text: "Government S&T spending grew 6% to ~¥1.0T. Combined with all-sector R&D, China's total R&D reached ¥3.613T (2.68% of GDP) — second globally behind the US.", tag: { text: "R&D: ¥3.61T total · 2.68% GDP", color: "teal" } },
    ],
    footnotes: {
      sources: "Primary sources: PRC Ministry of Finance — Budget Execution Report 2024; National Bureau of Statistics — Statistical Communiqué 2024; CEIC Data — Final Account: GPB Expenditure 2024; ChinaPower/CSIS; PIIE — China's Official Deficit Is No Longer Meaningful; SIPRI; Texas National Security Review.",
      methodology: "GDP reference: ¥136.5T nominal 2024. Exchange rate: avg ~7.19 CNY/USD. Revenue: ¥21.97T collected + ¥2.54T supplementary = ¥24.51T. Tax revenue ¥17.50T (–3.4% y/y). Non-tax revenue ¥4.47T (+25.4%). Expenditure line items from CEIC confirmed actuals and MoF data. The broad deficit of 6.5% of GDP (PIIE) includes all budget layers and off-budget items.",
    },
  },
  {
    id: "japan",
    name: "Japan",
    officialName: "Japan · General Account Budget",
    flagCode: "jp",
    isoNumeric: 392,
    fiscalYear: "Fiscal Year 2024",
    fiscalPeriod: "Apr 1, 2024 – Mar 31, 2025",
    currency: { symbol: "¥", code: "JPY", prefix: "¥", suffix: "T", divisor: 1000 },
    gdpNote: "GDP ~¥591T nominal",
    sourceNote: "All figures in ¥ Billion (JPY) · Source: MoF Japan",
    kpis: {
      receipts: { label: "Tax + Non-Tax Revenue", value: "¥77.1T", note: "68.5% of general account" },
      outlays: { label: "Total Expenditure", value: "¥112.6T", note: "19.0% of GDP" },
      balance: { label: "New Bond Issuance", value: "¥35.4T", note: "31.5% of total outlay", type: "deficit" },
      debt: { label: "Public Debt", value: "~178%", note: "¥1,061T outstanding JGBs · world's highest" },
    },
    indexCard: {
      description: "General Account breakdown covering the dramatic defence buildup, response to the fertility crisis, and the looming shock of rising debt interest.",
      tags: [
        { text: "Outlays: ¥112.6T (19.0% GDP)", color: "navy" },
        { text: "Deficit: ¥35.4T", color: "red" },
      ],
    },
    receipts: {
      panelNote: "Max = ¥23.8T (Consumption Tax) · Total ¥77.1T",
      groups: [
        { name: "Consumption & Indirect Taxes", items: [
          { label: "Consumption Tax", sub: "10% standard (8% reduced on food); national share", val: 23800, gdp: 4.0 },
        ]},
        { name: "Income & Corporate Taxes", items: [
          { label: "Income Tax", sub: "5–45% progressive; FY2024 flat-rate ¥30k reduction", val: 21000, gdp: 3.6 },
          { label: "Corporation Tax", sub: "23.2% standard; strong FY2024 corporate earnings", val: 17000, gdp: 2.9 },
        ]},
        { name: "Other Taxes", items: [
          { label: "Inheritance & Gift Tax", sub: "Progressive 10–55%; rising intergenerational wealth transfers", val: 2800, gdp: 0.5 },
          { label: "Other National Taxes", sub: "Stamp duty, customs, alcohol, tobacco, gasoline", val: 5000, gdp: 0.8 },
        ]},
        { name: "Non-Tax Revenue", items: [
          { label: "Non-Tax Revenue", sub: "BoJ surplus transfers, state asset sales, fees, fines", val: 7510, gdp: 1.3 },
        ]},
      ],
      methodNote: "Japan's FY2024 runs April 1, 2024 – March 31, 2025. Figures are the MoF initial budget supplemented by the December 2024 supplementary budget. Consumption tax revenue is split between national and local governments; the figure shown is the national share.",
    },
    deficitFinancing: { label: "New Bond Issuance", sub: "¥6.6T construction + ¥28.6T special deficit-financing + ¥0.2T child bonds", value: "¥35.4T", gdpNote: "31.5% of outlay", pct: 100 },
    totalLabel: "Total Resources Available",
    totalValue: "¥112.6T",
    outlays: {
      panelNote: "Max = ¥37.7T (Social Security) · Total ¥112.6T",
      groups: [
        { name: "Social Protection", items: [
          { label: "Social Security", sub: "Pensions, health insurance subsidy, long-term care, family support", val: 37720, gdp: 6.4 },
        ]},
        { name: "National Debt Service", items: [
          { label: "Interest Payments", sub: "Interest on ~¥1,061T outstanding JGBs; rising with BoJ normalization", val: 9600, gdp: 1.6 },
          { label: "Bond Redemptions", sub: "Refinancing of maturing bonds — rollover cost, not new borrowing", val: 17400, gdp: 2.9 },
        ]},
        { name: "Intergovernmental Transfers", items: [
          { label: "Local Allocation Tax", sub: "Fiscal equalisation grants to prefectures & municipalities", val: 17790, gdp: 3.0 },
        ]},
        { name: "Policy Spending", items: [
          { label: "National Defence", sub: "SDF personnel, equipment, Tomahawk purchase; +16.6%", val: 7920, gdp: 1.3 },
          { label: "Public Works", sub: "Roads, bridges, flood control, ports, seismic retrofitting", val: 6060, gdp: 1.0 },
          { label: "Education & Science", sub: "Compulsory education subsidies, universities, MEXT R&D", val: 5380, gdp: 0.9 },
          { label: "Children & Families", sub: "Children & Families Agency ¥5.3T; child allowances, childcare", val: 5300, gdp: 0.9 },
          { label: "Economy & Other", sub: "SME support, energy subsidies, earthquake fund, overseas aid", val: 5430, gdp: 0.9 },
        ]},
      ],
      totalLabel: "Total Expenditure",
      totalValue: "¥112.6T",
      methodNote: "National debt service ¥27.0T comprises ¥9.6T in interest payments and ¥17.4T in principal redemptions (rollover). Only the interest portion is a direct economic cost. Japan's JGB balance reached ~¥1,061T (~178% of GDP).",
    },
    callouts: [
      { icon: "👴", title: "Social Security: 33.5% of All Spending", text: "Social security at ¥37.72T is Japan's largest budget line, accounting for a third of all spending. Japan has the world's oldest population (29% aged 65+). Without structural reform, MoF projects social security will crowd out all other spending within two decades.", tag: { text: "Social security: 33.5% of all spending", color: "red" } },
      { icon: "⚠️", title: "Bond Dependency at 31.5%", text: "Japan has run a deficit in every fiscal year since 1975 (except FY1990). More than three yen out of every ten spent is borrowed. Outstanding JGB balance: ~¥1,061T (~178% of GDP). ~90% of JGBs are held domestically.", tag: { text: "Bond dependency: 31.5% · JGB ≈ ¥1,061T", color: "grey" } },
      { icon: "🛡️", title: "Defence Surge to ¥7.9T — Biggest Since WWII", text: "Japan's defence budget surged 16.6% in FY2024, part of a five-year plan to nearly double spending to ~2% of GDP by FY2027. Procurements include Tomahawk cruise missiles, expanded F-35 fleet, cyber warfare capabilities.", tag: { text: "Defence: +16.6% · Five-year doubling plan", color: "navy" } },
      { icon: "🏙️", title: "Local Allocation Tax: Fiscal Equalisation", text: "¥17.79T in transfers ensure every local government can provide baseline public services regardless of its tax base. Japanese local governments are heavily dependent on central transfers.", tag: { text: "LAT grants: ¥17.8T · 15.8% of spending", color: "teal" } },
      { icon: "📈", title: "Interest Rates Rising: Coming Debt-Service Shock", text: "Each 1 percentage point rate rise adds ~¥3.7T to annual interest with a 3-year lag. The BoJ ended negative rates in March 2024. Interest is projected to hit ¥13T by FY2026 — a 35% jump in two years.", tag: { text: "Interest rising: ¥9.6T → ¥13T by FY2026", color: "gold" } },
      { icon: "👶", title: "Children & Birthrate: Record Spending on Crisis", text: "Japan's fertility rate hit a record low of 1.20 in 2023. FY2024 included ¥5.3T for the Children and Families Agency (+10% y/y), covering childcare subsidies, expanded allowances, and fertility treatment.", tag: { text: "Children's budget: ¥5.3T · +10%", color: "navy" } },
    ],
    footnotes: {
      sources: "Primary sources: Ministry of Finance Japan — Highlights of FY2024 Draft Budget; Japanese Public Finance Fact Sheet 2024/2025 (MoF); FY2024 supplementary budget; Nippon.com — Japan's Fiscal 2024 Budget analysis.",
      methodology: "Japan's FY2024 = Apr 2024–Mar 2025. GDP reference: ~¥591T nominal. USD conversion: avg ~¥151/$. Revenue: consumption tax ¥23.8T is national share (local earmarks excluded). National debt service ¥27.0T = ¥9.6T interest + ¥17.4T principal. Defence ¥7.92T is general account total. Social security ¥37.72T covers only the general account subsidy; total public social security is ~¥136T across all accounts.",
    },
  },
  {
    id: "denmark",
    name: "Denmark",
    officialName: "Kingdom of Denmark · Kongeriget Danmark",
    flagCode: "dk",
    isoNumeric: 208,
    fiscalYear: "Fiscal Year 2024",
    fiscalPeriod: "Jan 1 – Dec 31, 2024",
    currency: { symbol: "DKK", code: "DKK", prefix: "DKK ", suffix: "B" },
    gdpNote: "GDP ~DKK 2.94T",
    sourceNote: "All figures in DKK Billion · Source: DST, Danmarks Nationalbank, OECD",
    kpis: {
      receipts: { label: "Total Revenue", value: "DKK 1.52T", note: "~51.8% of GDP" },
      outlays: { label: "Total Expenditure", value: "DKK 1.39T", note: "~47.3% of GDP" },
      balance: { label: "Fiscal Surplus", value: "+DKK 133B", note: "4.5% of GDP · Pharma-driven", type: "surplus" },
      debt: { label: "Public Debt", value: "~29%", note: "Among EU's lowest · declining rapidly" },
    },
    indexCard: {
      description: "An outlier in the OECD with zero social security contributions. Explores the robust fiscal surplus powered by corporate tax and the pharmaceutical boom.",
      tags: [
        { text: "Outlays: DKK 1.39T (47.3% GDP)", color: "navy" },
        { text: "Surplus: 4.5%", color: "green" },
      ],
    },
    receipts: {
      panelNote: "Max = DKK 603B (Personal Income Tax) · Total DKK 1.52T",
      groups: [
        { name: "Personal Income Taxes", items: [
          { label: "Personal Income Tax (total)", sub: "State bottom/top tax + municipal avg 25% + church tax", val: 503, gdp: 17.1 },
          { label: "Labour Market Contribution (AM-bidrag)", sub: "8% flat on all gross earned income — classified as income tax", val: 100, gdp: 3.4 },
        ]},
        { name: "Indirect Taxes", items: [
          { label: "VAT (MOMS)", sub: "25% flat rate · one of the highest in the EU · very limited zero-rating", val: 280, gdp: 9.5 },
          { label: "Excise & Environmental Duties", sub: "Fuel, tobacco, alcohol, energy, vehicles, CO₂, packaging", val: 100, gdp: 3.4 },
        ]},
        { name: "Corporate & Capital Taxes", items: [
          { label: "Corporate Income Tax", sub: "22% flat — boosted by Novo Nordisk / pharma profit surge", val: 130, gdp: 4.4 },
          { label: "Pension Return Tax (PAL-skat)", sub: "15.3% on annual yield of funded pension assets", val: 80, gdp: 2.7 },
          { label: "Property & Land Value Taxes", sub: "Municipal grundskyld 1.6–3.4% + property value tax", val: 45, gdp: 1.5 },
        ]},
        { name: "Other Receipts", items: [
          { label: "Customs, Fees & Non-Tax Revenue", sub: "EU customs, public fees, fines, state enterprise surpluses", val: 286, gdp: 9.7 },
        ]},
      ],
      methodNote: "Denmark funds its welfare state almost entirely through direct and indirect taxes. Unlike most OECD peers, Denmark collects zero revenue from social security contributions — the largest structural difference in its fiscal system. The AM-bidrag is classified as income tax, not a social contribution.",
    },
    totalLabel: "Total Revenue",
    totalValue: "DKK 1.52T",
    outlays: {
      panelNote: "Max = DKK 278B (Health) · Total DKK 1.39T",
      groups: [
        { name: "Social Protection", items: [
          { label: "Social Protection (total)", sub: "Old-age/disability pensions, family, unemployment, housing", val: 215, gdp: 7.3 },
        ]},
        { name: "Health", items: [
          { label: "Healthcare (Sundhedsvæsenet)", sub: "Total system cost · hospitals 46% · GPs · pharmaceuticals", val: 278, gdp: 9.5 },
        ]},
        { name: "Education", items: [
          { label: "Education (Uddannelse)", sub: "Folkeskole, universities, vocational training · all tuition-free", val: 175, gdp: 5.9 },
        ]},
        { name: "General Public Services & Administration", items: [
          { label: "General Public Services", sub: "Government admin, SKAT, courts, police, fire", val: 175, gdp: 5.9 },
        ]},
        { name: "Defence & Security", items: [
          { label: "Defence (Forsvar)", sub: "Finance Act: DKK 36.2B · NATO def. ~DKK 71B incl. civil defence", val: 71, gdp: 2.4 },
        ]},
        { name: "Economic Affairs & Infrastructure", items: [
          { label: "Transport & Infrastructure", sub: "Roads, rail, DSB subsidies, cycling infrastructure", val: 50, gdp: 1.7 },
          { label: "Economic Affairs & Energy", sub: "Business subsidies, green transition, energy, agriculture", val: 65, gdp: 2.2 },
          { label: "Environment & Housing", sub: "Climate, wastewater, nature, social housing", val: 30, gdp: 1.0 },
        ]},
        { name: "Debt Interest", items: [
          { label: "Net Interest on Government Debt", sub: "Central gov. net interest: −DKK 0.3B · incl. regions & municipalities", val: 15, gdp: 0.5 },
        ]},
      ],
      totalLabel: "Total Expenditure",
      totalValue: "DKK 1.39T",
      methodNote: "Expenditure follows ESA2010/COFOG classification. Healthcare is the largest single function reflecting Denmark's universal, free-at-point-of-use NHS-equivalent system. Social protection includes Folkepension, disability, family allowances, and unemployment benefits.",
    },
    surplusInfo: { value: "+DKK 133B", pct: 48 },
    callouts: [
      { icon: "💊", title: "Novo Nordisk Effect: The Pharmaceutical Surge", text: "The 4.5% surplus was partly driven by Novo Nordisk (Ozempic/Wegovy). Denmark's export revenues surged, lifting GDP and corporate tax receipts. Novo Nordisk alone accounted for ~70% of GDP growth in H1 2024.", tag: { text: "Corp. tax + PAL beat forecast by ~DKK 30B+", color: "teal" } },
      { icon: "🏥", title: "Healthcare: DKK 278B — Largest Budget Function", text: "Total healthcare spending reached DKK 278B, ~9.5% of GDP. Nearly half (DKK 128B) was allocated to hospital services. Denmark's five regions deliver almost all hospital care.", tag: { text: "Healthcare: ~9.5% GDP · DKK 278B total", color: "red" } },
      { icon: "🎓", title: "No Social Security Contributions — A Nordic Anomaly", text: "Denmark is the only OECD country raising zero from social security contributions. The entire welfare state is funded from income taxes and VAT. Personal income tax accounts for over 50% of total government revenue.", tag: { text: "No SSC: unique in OECD", color: "navy" } },
      { icon: "💰", title: "VAT at 25%: Joint-Highest in Europe", text: "Denmark's 25% flat VAT applies virtually uniformly — no reduced rates on food, medicines, or children's clothing. This simplicity yields high compliance and revenue efficiency.", tag: { text: "VAT 25% — no reduced rates", color: "red" } },
      { icon: "🛡️", title: "Defence: Racing to Hit NATO 2%", text: "NATO-defined defence expenditure reached ~DKK 71B (2.4% of GDP). Denmark committed to meeting the 2% threshold after years below it.", tag: { text: "NATO definition: ~2.4% GDP", color: "gold" } },
      { icon: "👴", title: "The Folkepension: Universal, Tax-Funded", text: "Denmark's public pension is universal and residence-based, funded from general taxation. Danes' private pension assets exceed 200% of GDP, reducing long-term public pension pressure.", tag: { text: "Folkepension: ~7–8% GDP", color: "navy" } },
    ],
    footnotes: {
      sources: "Primary sources: Danmarks Nationalbank — Central Government Borrowing and Debt 2024; Statistics Denmark (DST); OECD — Government at a Glance 2025; Danish Ministry of Defence; European Commission forecast; OECD Taxing Wages 2025.",
      methodology: "Revenue and expenditure are general government consolidated (central, municipalities, regions, social funds), ESA2010. GDP: DKK 2.94T. Revenue: ~51.8% GDP; Expenditure: ~47.3% GDP; Surplus: 4.5% GDP. Denmark has no social security contributions. The AM-bidrag (8%) is classified as personal income tax. Currency: DKK, pegged to EUR at ~7.46 DKK/EUR.",
    },
  },
];

const countries = [...countriesBase, ...countriesB, ...countriesC];

export function getCountry(id) {
  return countries.find(c => c.id === id);
}

export function getAllCountries() {
  return countries;
}

export default countries;
