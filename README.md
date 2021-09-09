# Plastic Detector
---
## 업데이트 기록

**2021-09-09(목)**
- 앱 메타 데이터 변경(엡 이름: Plastic Detector, 앱 버전 0.0.1)
- 스플래시 변경(임시 이미지)
- 첫 화면(이용약관 및 동의) 텍스트 변경
- 템플릿 구조 분석 및 코드 파일 트리 작성

**2021-09-07(화)**
- 앱 아이콘 변경
---

## 템플릿 구조
- 코드로 작성해야하는 부분만 포함되어있습니다.
- `__test__, translations` 폴더는 제외했습니다.
- 파일의 역할을 간단히 표시 합니다. (표시 중)
- 변경할 파일은 해당 줄 끝에 🔁 표시합니다. (표시 중)
- 제거할 파일은 해당 줄 끝에 🗑 표시합니다. (표시 중)
- 유지할 파일은 아무 표시도 하지 않습니다.
- 변경과 제거가 완료된 파일은 해당 줄 끝에 ✅ 표시합니다.
---
`
Root
├── App.tsx
├── components
│   ├── Button
│   │   ├── Button.styles.ts 🔁
│   │   ├── Button.tsx 🔁
│   │   ├── index.ts
│   │   └── styles.js
│   ├── EmissionListItem
│   │   ├── EmissionListItem.styles.ts 🔁
│   │   ├── EmissionListItem.ts 🔁
│   │   └── index.ts
│   ├── HTMLImage
│   │   ├── HTMLImage.styles.ts
│   │   ├── HTMLImage.tsx
│   │   ├── imagePath.ts
│   │   └── index.js
│   ├── InfoButton
│   │   ├── index.ts
│   │   ├── infoButton.styles.ts
│   │   └── infoButton.tsx
│   ├── ListItem
│   │   ├── index.ts
│   │   ├── ListItem.styles.ts
│   │   └── ListItem.tsx
│   ├── NoEmission
│   │   ├── index.ts
│   │   ├── NoEmission.styles.ts
│   │   └── NoEmission.tsx
│   ├── SelectableListItem
│   │   ├── index.ts
│   │   ├── SelectableListItem.styles.ts
│   │   └── SelectableListItem.tsx
│   ├── SocialMedia
│   │   ├── index.ts
│   │   ├── SocialMedia.styles.ts
│   │   └── SocialMedia.tsx
│   ├── StickersImage
│   │   ├── index.ts
│   │   ├── StickersImage.styles.ts
│   │   └── StickersImage.tsx
│   ├── TabBarIcon
│   │   ├── index.ts
│   │   └── TabBarIcon.tsx
│   ├── Tag
│   │   ├── index.ts
│   │   ├── Tag.styles.ts
│   │   └── Tag.tsx
│   ├── Text
│   │   ├── H1
│   │   │   ├── H1.styles.ts
│   │   │   ├── H1.tsx
│   │   │   └── index.tsx
│   │   ├── H2
│   │   │   ├── H2.styles.ts
│   │   │   ├── H2.tsx
│   │   │   └── index.tsx
│   │   ├── H3
│   │   │   ├── H3.styles.ts
│   │   │   ├── H3.tsx
│   │   │   └── index.tsx
│   │   ├── Link
│   │   │   ├── index.tsx
│   │   │   ├── Link.styles.ts
│   │   │   └── Link.tsx
│   │   ├── Primary
│   │   │   ├── index.tsx
│   │   │   ├── Primary.styles.ts
│   │   │   └── Primary.tsx
│   │   ├── Secondary
│   │   │   ├── index.tsx
│   │   │   ├── Secondary.styles.ts
│   │   │   └── Secondary.tsx
│   │   ├── Tertiary
│   │   │   ├── index.tsx
│   │   │   ├── Tertiary.styles.ts
│   │   │   └── Tertiary.tsx
│   │   ├── index.ts
│   │   └── styles.ts
│   ├── TextInput
│   │   ├── index.ts
│   │   ├── TextInput.styles.ts
│   │   └── TextInput.tsx
│   └── index.ts
├── constant
│   ├── ImagesAssets.ts
│   ├── index.ts
│   ├── Layout.ts
│   └── Preferences.ts
├── ducks
│   ├── budget
│   │   ├── budget.selectors.ts
│   │   ├── budget.slice.ts 
│   │   └── index.ts
│   ├── emission
│   │   ├── emission.selectors.ts
│   │   ├── emission.slice.ts 
│   │   └── index.ts
│   ├── userPreferences
│   │   ├── index.ts
│   │   ├── userPreferences.selectors.ts
│   │   └── userPreferences.slice.ts
│   └── index.ts
├── interfaces
│   ├── emission
│   │   ├── emission.interface.ts
│   │   └── index.ts
│   ├── navigations
│   │   ├── index.ts
│   │   └── navigation.ts
│   └── index.ts
├── navigation
│   ├── Navigator
│   │   ├── BottomTab
│   │   │   ├── ActNavigator.tsx
│   │   │   ├── ActTabNavigator.tsx
│   │   │   ├── AddEmissionNavigator.tsx
│   │   │   ├── BudgetNavigator.tsx
│   │   │   ├── EmissionsNavigator.tsx
│   │   │   └── SettingsNavigator.tsx
│   │   ├── AppNavigator.tsx
│   │   ├── BottomTabNavigator.tsx
│   │   ├── InfoModalNavigator.tsx
│   │   ├── ModalNavigator.tsx
│   │   └── RootNavigator.tsx
│   ├── index.ts
│   └── navigate.ts
├── redux
│   ├── rootReducer.ts
│   └── store.ts
├── screens
│   ├── About
│   │   ├── AboutScreen.navigationOptions.tsx
│   │   ├── AboutScreen.styles.tsx
│   │   ├── AboutScreen.tsx
│   │   └── index.ts
│   ├── Act
│   │   ├── ActScreen.navigationOptions.tsx
│   │   ├── ActScreen.styles.tsx
│   │   ├── ActScreen.tsx
│   │   └── index.ts
│   ├── ActDetail
│   │   ├── ActDetailScreen.navigationOptions.tsx
│   │   ├── ActDetailScreen.styles.tsx
│   │   ├── ActDetailScreen.tsx
│   │   ├── imagePath.tsx
│   │   └── index.ts
│   ├── AddEmission
│   │   ├── components
│   │   │   ├── AddEmissionButton
│   │   │   │   ├── AddEmissionButton.styles.ts
│   │   │   │   ├── AddEmissionButton.ts
│   │   │   │   └── index.ts
│   │   │   ├── Custom
│   │   │   │   ├── Custom.styles.ts
│   │   │   │   ├── Custom.ts
│   │   │   │   └── index.ts
│   │   │   ├── Electricity
│   │   │   │   ├── Electricity.styles.ts
│   │   │   │   ├── Electricity.ts
│   │   │   │   └── index.ts
│   │   │   ├── Fashion
│   │   │   │   ├── Fashion.styles.ts
│   │   │   │   ├── Fashion.ts
│   │   │   │   └── index.ts
│   │   │   ├── Food
│   │   │   │   ├── Food.styles.ts
│   │   │   │   ├── Food.ts
│   │   │   │   └── index.ts
│   │   │   ├── Meal
│   │   │   │   ├── index.ts
│   │   │   │   ├── Meal.styles.ts
│   │   │   │   └── Meal.ts
│   │   │   ├── Purchase
│   │   │   │   ├── index.ts
│   │   │   │   ├── Purchase.styles.ts
│   │   │   │   └── Purchase.ts
│   │   │   ├── Streaming
│   │   │   │   ├── index.ts
│   │   │   │   ├── Streaming.styles.ts
│   │   │   │   └── Streaming.ts
│   │   │   ├── Transport
│   │   │   │   ├── index.ts
│   │   │   │   ├── Transport.styles.ts
│   │   │   │   └── Transport.ts
│   │   │   └── index.ts
│   │   ├── AddEmissionScreen.navigationOptions.tsx
│   │   ├── AddEmissionScreen.styles.tsx
│   │   ├── AddEmissionScreen.tsx
│   │   └── index.ts
│   ├── BarCodeScan
│   │   ├── BarCodeScanScreen.navigationOptions.tsx
│   │   ├── BarCodeScanScreen.styles.tsx
│   │   ├── BarCodeScanScreen.tsx
│   │   └── index.ts
│   ├── Budget
│   │   ├── components
│   │   │   ├── NumberOfDaysVegetarian
│   │   │   │   ├── ducks
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── NumberOfDaysVegetarian.selectors.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── NumberOfDaysVegetarian.styles.ts
│   │   │   │   └── NumberOfDaysVegetarian.tsx
│   │   │   ├── ProgressChart
│   │   │   │   ├── components
│   │   │   │   │   ├── Chart
│   │   │   │   │   │   ├── Chart.styles.ts
│   │   │   │   │   │   ├── Chart.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── Legend
│   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   ├── Legend.styles.ts
│   │   │   │   │   │   └── Legend.ts
│   │   │   │   │   ├── LegendItem
│   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   ├── LegendItem.styles.ts
│   │   │   │   │   │   └── LegendItem.ts
│   │   │   │   │   └── PeriodBudget
│   │   │   │   │       ├── index.ts
│   │   │   │   │       ├── PeriodBudget.styles.ts
│   │   │   │   │       └── PeriodBudget.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── ProgressChart.styles.tsx
│   │   │   │   └── ProgressChart.tsx
│   │   │   └── index.ts
│   │   ├── ducks
│   │   │   ├── BudgetScreen.selectors.ts
│   │   │   └── index.ts
│   │   ├── BudgetScreen.navigationOptions.tsx
│   │   ├── BudgetScreen.styles.tsx
│   │   ├── BudgetScreen.tsx
│   │   └── index.ts
│   ├── CategorySelection
│   │   ├── categoryList.tsx
│   │   ├── CategorySelectionScreen.navigationOptions.tsx
│   │   ├── CategorySelectionScreen.styles.tsx
│   │   ├── CategorySelectionScreen.tsx
│   │   └── index.ts
│   ├── ComingSoon
│   │   ├── ComingSoonScreen.navigationOptions.tsx
│   │   ├── ComingSoonScreen.styles.ts
│   │   ├── ComingSoonScreen.tsx
│   │   └── index.ts
│   ├── EmissionItem
│   │   ├── EmissionItemScreen.navigationOptions.tsx
│   │   ├── EmissionItemScreen.styles.ts
│   │   ├── EmissionItemScreen.tsx
│   │   └── index.ts
│   ├── Emission
│   │   ├── components
│   │   │   ├── SectionHeader
│   │   │   │   ├── index.ts
│   │   │   │   ├── SectionHeader.styles.ts
│   │   │   │   └── SectionHeader.tsx
│   │   │   └── index.ts
│   │   ├── ducks
│   │   │   ├── EmissionScreen.selectors.ts
│   │   │   └── index.ts
│   │   ├── EmissionScreen.navigationOptions.tsx
│   │   ├── EmissionScreen.styles.ts
│   │   ├── EmissionScreen.tsx
│   │   └── index.ts
│   ├── InfoModal
│   │   ├── index.ts
│   │   ├── InfoModal.navigationOptions.tsx
│   │   ├── InfoModalScreen.styles.ts
│   │   └── InfoModalScreen.tsx
│   ├── Intro
│   │   ├── index.ts
│   │   ├── IntroScreen.styles.ts
│   │   └── IntroScreen.tsx 🔁
│   ├── Languages
│   │   ├── index.ts
│   │   ├── LanguagesScreen.navigationOptions.tsx
│   │   ├── LanguagesScreen.styles.ts
│   │   └── LanguagesScreen.tsx
│   ├── MonthlyBudget
│   │   ├── index.ts
│   │   ├── MonthlyBudgetScreen.navigationOptions.tsx
│   │   ├── MonthlyBudgetScreen.styles.ts
│   │   └── MonthlyBudgetScreen.tsx
│   ├── MonthlyEmissions
│   │   ├── ducks
│   │   │   ├── index.ts
│   │   │   └── MonthlyEmissionsScreen.selectors.ts
│   │   ├── index.ts
│   │   ├── MonthlyEmissionsScreen.navigationOptions.tsx
│   │   ├── MonthlyEmissionsScreen.styles.ts
│   │   └── MonthlyEmissionsScreen.tsx
│   │   ├── index.ts
│   │   ├── MonthlyEmissionsScreen.navigationOptions.tsx
│   │   ├── MonthlyEmissionsScreen.styles.ts
│   │   └── MonthlyEmissionsScreen.tsx
│   ├── MyData
│   │   ├── index.ts
│   │   ├── MyDataScreen.navigationOptions.tsx
│   │   ├── MyDataScreen.styles.ts
│   │   └── MyDataScreen.tsx
│   ├── MyLocation
│   │   ├── index.ts
│   │   ├── MyLocationScreen.navigationOptions.tsx
│   │   ├── MyLocationScreen.styles.ts
│   │   └── MyLocationScreen.tsx
│   ├── Notifications
│   │   ├── index.ts
│   │   ├── NotificationsScreen.navigationOptions.tsx
│   │   ├── NotificationsScreen.styles.ts
│   │   └── NotificationsScreen.tsx
│   ├── Settings
│   │   ├── index.ts
│   │   ├── SettingsScreen.navigationOptions.tsx
│   │   ├── SettingsScreen.styles.ts
│   │   └── SettingsScreen.tsx
│   ├── SubCategorySelection
│   │   ├── index.ts
│   │   ├── SubCategorySelectionScreen.navigationOptions.tsx
│   │   ├── SubCategorySelectionScreen.styles.ts
│   │   ├── SubCategorySelectionScreen.ts
│   │   └── subCategoryTypes.tsx
│   ├── SupportUs
│   │   ├── index.ts
│   │   ├── SupportUsScreen.navigationOptions.tsx
│   │   ├── SupportUsScreen.styles.ts
│   │   └── SupportUsScreen.tsx
├── style
│   ├── colors
│   │   ├── Colors.ts
│   │   └── index.ts
│   ├── components
│   │   ├── Header
│   │   │   ├── Header.ts
│   │   │   └── index.ts
│   │   ├── Transitions
│   │   │   ├── Index.ts
│   │   │   └── Transitions.ts
│   │   └── index.ts
│   ├── font
│   │   ├── Font.ts
│   │   └── Index.ts
│   ├── layout
│   │   ├── Index.ts
│   │   └── Layout.ts
│   └── index.ts
├── types
│   └── guide.ts
└── utils
    ├── calculation
    │   ├── calculation.ts
    │   └── index.ts
    ├── platform
    │   ├── index.ts
    │   └── platform.ts 
    ├── time
    │   ├── index.ts
    │   └── time.ts 
    ├── transitions
    │   ├── i18n.ts
    │   ├── index.ts
    │   ├── languages.ts
    │   ├── localization.ts
    │   └── resource.ts 
    ├── ui
    │   ├── index.ts
    │   └── ui.ts 
    └── index.ts
    `