# FlashPoint User Journey Flows - Mermaid Diagrams

## Admin Flows

### 1. Admin - Login to Dashboard Flow
```mermaid
flowchart TD
    Start([Admin User]) --> Login[Login Page]
    Login --> EnterCreds[Enter Admin Credentials]
    EnterCreds --> Validate{Valid Credentials?}
    Validate -->|No| Error[Show Error Message]
    Error --> Login
    Validate -->|Yes| Dashboard[Admin Dashboard]
    Dashboard --> ViewStats[View Financial Stats]
    Dashboard --> ViewTransactions[View Recent Transactions]
    Dashboard --> ViewPending[View Pending Approvals]
    Dashboard --> QuickNav[Quick Navigation to Features]
```

### 2. Admin - Pending Events Approval Flow
```mermaid
flowchart TD
    Start([Admin User]) --> Login[Login Page]
    Login --> Dashboard[Admin Dashboard]
    Dashboard --> PendingNav[Navigate to Pending Approvals]
    PendingNav --> ViewList[View List of Pending Events]
    ViewList --> SelectEvent[Select Event to Review]
    SelectEvent --> ViewDetails[View Event Details]
    ViewDetails --> CheckInfo{Review Information}
    CheckInfo --> ViewBudget[Check Budget Request]
    CheckInfo --> ViewSociety[Check Society Info]
    CheckInfo --> ViewDate[Check Event Date]
    ViewBudget --> Decision{Approve or Reject?}
    ViewSociety --> Decision
    ViewDate --> Decision
    Decision -->|Approve| ConfirmApprove[Click Approve Button]
    Decision -->|Reject| ConfirmReject[Click Reject Button]
    ConfirmApprove --> ApproveDialog[Confirm Approval]
    ConfirmReject --> RejectDialog[Enter Rejection Reason]
    ApproveDialog --> NotifyTreasurer[Notify Treasurer]
    RejectDialog --> NotifyTreasurer
    NotifyTreasurer --> UpdateList[Update Pending List]
    UpdateList --> AuditLog[Log Action in Audit]
    AuditLog --> MoreEvents{More Events to Review?}
    MoreEvents -->|Yes| ViewList
    MoreEvents -->|No| End([Complete])
```

### 3. Admin - User Management Flow
```mermaid
flowchart TD
    Start([Admin User]) --> Login[Login Page]
    Login --> Dashboard[Admin Dashboard]
    Dashboard --> UserMgmt[Navigate to User Management]
    UserMgmt --> ViewUsers[View All Users]
    ViewUsers --> Action{Select Action}
    
    Action -->|Add User| AddUser[Click Add User Button]
    AddUser --> EnterDetails[Enter User Details]
    EnterDetails --> SelectRole[Select User Role]
    SelectRole --> SetPermissions[Set Permissions]
    SetPermissions --> CreateUser[Create User Account]
    CreateUser --> SendInvite[Send Invitation Email]
    SendInvite --> LogCreate[Log User Creation]
    LogCreate --> ViewUsers
    
    Action -->|Edit User| SelectUser[Select User to Edit]
    SelectUser --> EditDetails[Edit User Information]
    EditDetails --> UpdateRole[Update Role/Permissions]
    UpdateRole --> SaveChanges[Save Changes]
    SaveChanges --> LogEdit[Log User Update]
    LogEdit --> ViewUsers
    
    Action -->|Deactivate| SelectDeactivate[Select User]
    SelectDeactivate --> ConfirmDeactivate[Confirm Deactivation]
    ConfirmDeactivate --> DeactivateUser[Deactivate User Account]
    DeactivateUser --> LogDeactivate[Log Deactivation]
    LogDeactivate --> ViewUsers
    
    Action -->|Search/Filter| SearchUser[Enter Search Criteria]
    SearchUser --> FilterResults[Apply Filters]
    FilterResults --> ViewFiltered[View Filtered Users]
    ViewFiltered --> ViewUsers
    
    ViewUsers --> Done{Done?}
    Done -->|No| Action
    Done -->|Yes| End([Complete])
```

### 4. Admin - Transactions Management Flow
```mermaid
flowchart TD
    Start([Admin User]) --> Login[Login Page]
    Login --> Dashboard[Admin Dashboard]
    Dashboard --> Transactions[Navigate to Transactions]
    Transactions --> ViewAll[View All Transactions]
    ViewAll --> Action{Select Action}
    
    Action -->|Search| EnterSearch[Enter Search Query]
    EnterSearch --> DisplayResults[Display Search Results]
    DisplayResults --> ViewAll
    
    Action -->|Filter| SelectFilters[Select Filter Criteria]
    SelectFilters --> FilterType[Filter by Type/Status/Date]
    FilterType --> ApplyFilter[Apply Filters]
    ApplyFilter --> DisplayFiltered[Display Filtered Results]
    DisplayFiltered --> ViewAll
    
    Action -->|View Details| SelectTxn[Select Transaction]
    SelectTxn --> ViewDetails[View Transaction Details]
    ViewDetails --> CheckInfo[Check Full Information]
    CheckInfo --> ViewAll
    
    Action -->|Export| ClickExport[Click Export Button]
    ClickExport --> SelectFormat[Select Export Format]
    SelectFormat --> GenerateReport[Generate Report]
    GenerateReport --> Download[Download File]
    Download --> LogExport[Log Export Action]
    LogExport --> ViewAll
    
    ViewAll --> Done{Done?}
    Done -->|No| Action
    Done -->|Yes| End([Complete])
```

### 5. Admin - GL Reports Flow
```mermaid
flowchart TD
    Start([Admin User]) --> Login[Login Page]
    Login --> Dashboard[Admin Dashboard]
    Dashboard --> GLReports[Navigate to GL Reports]
    GLReports --> ViewSummary[View Account Summary]
    ViewSummary --> Action{Select Action}
    
    Action -->|Filter by Date| SelectDate[Select Date Range]
    SelectDate --> ApplyDate[Apply Date Filter]
    ApplyDate --> RefreshView[Refresh GL View]
    RefreshView --> ViewSummary
    
    Action -->|Filter by Account| SelectAccount[Select Account Type]
    SelectAccount --> FilterAccount[Filter Accounts]
    FilterAccount --> RefreshView
    
    Action -->|View Details| SelectEntry[Select GL Entry]
    SelectEntry --> ViewEntryDetails[View Entry Details]
    ViewEntryDetails --> ViewTransactions[View Related Transactions]
    ViewTransactions --> ViewSummary
    
    Action -->|Generate Report| SelectReport[Select Report Type]
    SelectReport --> ConfigReport[Configure Report Parameters]
    ConfigReport --> GenerateGL[Generate GL Report]
    GenerateGL --> PreviewReport[Preview Report]
    PreviewReport --> ExportReport[Export Report]
    ExportReport --> LogAction[Log Report Generation]
    LogAction --> ViewSummary
    
    ViewSummary --> Done{Done?}
    Done -->|No| Action
    Done -->|Yes| End([Complete])
```

### 6. Admin - Bank Reconciliation Flow
```mermaid
flowchart TD
    Start([Admin User]) --> Login[Login Page]
    Login --> Dashboard[Admin Dashboard]
    Dashboard --> Reconciliation[Navigate to Reconciliation]
    Reconciliation --> ViewStatus[View Reconciliation Status]
    ViewStatus --> Action{Select Action}
    
    Action -->|Import Statement| ClickImport[Click Import Button]
    ClickImport --> SelectFile[Select Bank Statement File]
    SelectFile --> UploadFile[Upload File]
    UploadFile --> ParseData[Parse Bank Data]
    ParseData --> ViewStatus
    
    Action -->|Auto-Reconcile| ClickAuto[Click Auto-Reconcile]
    ClickAuto --> MatchTransactions[Match Transactions Automatically]
    MatchTransactions --> ShowResults[Show Matching Results]
    ShowResults --> ViewStatus
    
    Action -->|Resolve Discrepancy| SelectItem[Select Discrepancy Item]
    SelectItem --> ViewDiff[View System vs Bank Difference]
    ViewDiff --> Decision{Resolution Action}
    Decision -->|Adjust System| AdjustSystem[Adjust System Amount]
    Decision -->|Add Missing Entry| AddEntry[Add Missing Transaction]
    Decision -->|Mark as Exception| MarkException[Mark as Exception]
    AdjustSystem --> SaveResolution[Save Resolution]
    AddEntry --> SaveResolution
    MarkException --> SaveResolution
    SaveResolution --> LogResolution[Log Reconciliation Action]
    LogResolution --> ViewStatus
    
    Action -->|Export Report| ExportRecon[Export Reconciliation Report]
    ExportRecon --> DownloadReport[Download Report]
    DownloadReport --> ViewStatus
    
    ViewStatus --> Done{Done?}
    Done -->|No| Action
    Done -->|Yes| End([Complete])
```

### 7. Admin - Audit Logs Flow
```mermaid
flowchart TD
    Start([Admin User]) --> Login[Login Page]
    Login --> Dashboard[Admin Dashboard]
    Dashboard --> AuditLogs[Navigate to Audit Logs]
    AuditLogs --> ViewLogs[View All Audit Logs]
    ViewLogs --> Action{Select Action}
    
    Action -->|Search| EnterSearch[Enter Search Query]
    EnterSearch --> SearchLogs[Search Through Logs]
    SearchLogs --> DisplayResults[Display Search Results]
    DisplayResults --> ViewLogs
    
    Action -->|Filter| SelectFilter[Select Filter Criteria]
    SelectFilter --> FilterByUser[Filter by User]
    SelectFilter --> FilterByAction[Filter by Action Type]
    SelectFilter --> FilterByDate[Filter by Date Range]
    FilterByUser --> ApplyFilters[Apply Filters]
    FilterByAction --> ApplyFilters
    FilterByDate --> ApplyFilters
    ApplyFilters --> ShowFiltered[Show Filtered Logs]
    ShowFiltered --> ViewLogs
    
    Action -->|View Details| SelectLog[Select Log Entry]
    SelectLog --> ViewDetails[View Full Log Details]
    ViewDetails --> ViewIP[View IP Address]
    ViewDetails --> ViewTimestamp[View Timestamp]
    ViewDetails --> ViewAction[View Action Details]
    ViewIP --> ViewLogs
    ViewTimestamp --> ViewLogs
    ViewAction --> ViewLogs
    
    Action -->|Export| ClickExport[Click Export Button]
    ClickExport --> SelectRange[Select Date Range]
    SelectRange --> GenerateExport[Generate Export File]
    GenerateExport --> Download[Download Audit Report]
    Download --> ViewLogs
    
    ViewLogs --> Done{Done?}
    Done -->|No| Action
    Done -->|Yes| End([Complete])
```

---

## Treasurer Flows

### 1. Treasurer - Login to Dashboard Flow
```mermaid
flowchart TD
    Start([Treasurer User]) --> Login[Login Page]
    Login --> EnterCreds[Enter Treasurer Credentials]
    EnterCreds --> Validate{Valid Credentials?}
    Validate -->|No| Error[Show Error Message]
    Error --> Login
    Validate -->|Yes| Dashboard[Treasurer Dashboard]
    Dashboard --> ViewEvents[View Active Events]
    Dashboard --> ViewDues[View Society Dues]
    Dashboard --> ViewStats[View Collection Stats]
    Dashboard --> QuickActions[Quick Actions Menu]
```

### 2. Treasurer - Events Management Flow
```mermaid
flowchart TD
    Start([Treasurer User]) --> Login[Login Page]
    Login --> Dashboard[Treasurer Dashboard]
    Dashboard --> EventsList[Navigate to Events List]
    EventsList --> Action{Select Action}
    
    Action -->|Create Event| ClickCreate[Click Create Event]
    ClickCreate --> EnterName[Enter Event Name]
    EnterName --> EnterDesc[Enter Description]
    EnterDesc --> SetDate[Set Event Date]
    SetDate --> SetAmount[Set Payment Amount]
    SetAmount --> SetTarget[Set Target Budget]
    SetTarget --> ReviewEvent[Review Event Details]
    ReviewEvent --> SubmitEvent[Submit for Approval]
    SubmitEvent --> WaitApproval{Wait for Admin Approval}
    WaitApproval -->|Approved| EventActive[Event Becomes Active]
    WaitApproval -->|Rejected| Notification[Receive Rejection Notice]
    Notification --> EventsList
    EventActive --> EventsList
    
    Action -->|View Event| SelectEvent[Select Event]
    SelectEvent --> ViewDetails[View Event Details]
    ViewDetails --> ViewProgress[View Payment Progress]
    ViewDetails --> ViewAttendees[View Registered Attendees]
    ViewDetails --> ViewPayments[View Payment List]
    ViewPayments --> EventsList
    
    Action -->|Share QR| SelectShareEvent[Select Event]
    SelectShareEvent --> ClickShare[Click Share QR Button]
    ClickShare --> GenerateQR[Generate QR Code]
    GenerateQR --> DisplayQR[Display QR Code Modal]
    DisplayQR --> ShareOptions{Share Method}
    ShareOptions -->|Download| DownloadQR[Download QR Image]
    ShareOptions -->|Copy Link| CopyLink[Copy Payment Link]
    ShareOptions -->|Share Social| ShareSocial[Share on Social Media]
    DownloadQR --> EventsList
    CopyLink --> EventsList
    ShareSocial --> EventsList
    
    EventsList --> Done{Done?}
    Done -->|No| Action
    Done -->|Yes| End([Complete])
```

### 3. Treasurer - Society Dues Management Flow
```mermaid
flowchart TD
    Start([Treasurer User]) --> Login[Login Page]
    Login --> Dashboard[Treasurer Dashboard]
    Dashboard --> DuesList[Navigate to Society Dues]
    DuesList --> Action{Select Action}
    
    Action -->|Create Due| ClickCreate[Click Create Due]
    ClickCreate --> EnterTitle[Enter Due Title]
    EnterTitle --> SetAmount[Set Due Amount]
    SetAmount --> SetDeadline[Set Payment Deadline]
    SetDeadline --> SelectMembers[Select Target Members]
    SelectMembers --> ReviewDue[Review Due Details]
    ReviewDue --> PublishDue[Publish Due]
    PublishDue --> NotifyMembers[Notify All Members]
    NotifyMembers --> DuesList
    
    Action -->|View Due Details| SelectDue[Select Due]
    SelectDue --> ViewDueDetails[View Due Details]
    ViewDueDetails --> ViewStats[View Payment Statistics]
    ViewStats --> ViewPaid[View Paid Members]
    ViewStats --> ViewPending[View Pending Members]
    ViewPaid --> DuesList
    ViewPending --> DuesList
    
    Action -->|Share QR| SelectShareDue[Select Due]
    SelectShareDue --> ClickShareQR[Click Share QR]
    ClickShareQR --> GenerateQR[Generate QR Code]
    GenerateQR --> DisplayQR[Display QR Modal]
    DisplayQR --> ShareAction{Share Method}
    ShareAction -->|Download| DownloadQR[Download QR]
    ShareAction -->|Copy| CopyLink[Copy Payment Link]
    ShareAction -->|Print| PrintQR[Print QR Code]
    DownloadQR --> DuesList
    CopyLink --> DuesList
    PrintQR --> DuesList
    
    Action -->|Export Report| SelectDueExport[Select Due]
    SelectDueExport --> ClickExport[Click Export]
    ClickExport --> GenerateReport[Generate Payment Report]
    GenerateReport --> DownloadReport[Download Excel/CSV]
    DownloadReport --> DuesList
    
    DuesList --> Done{Done?}
    Done -->|No| Action
    Done -->|Yes| End([Complete])
```

### 4. Treasurer - Payment Tracking Flow
```mermaid
flowchart TD
    Start([Treasurer User]) --> Login[Login Page]
    Login --> Dashboard[Treasurer Dashboard]
    Dashboard --> Payments[Navigate to Payment Tracking]
    Payments --> ViewAll[View All Payments]
    ViewAll --> Action{Select Action}
    
    Action -->|Search Payment| EnterSearch[Enter Student Name/Matric]
    EnterSearch --> SearchResults[Display Search Results]
    SearchResults --> ViewAll
    
    Action -->|Filter| SelectFilter[Select Filter Options]
    SelectFilter --> FilterByEvent[Filter by Event]
    SelectFilter --> FilterByStatus[Filter by Status]
    SelectFilter --> FilterByDate[Filter by Date]
    FilterByEvent --> ApplyFilters[Apply Filters]
    FilterByStatus --> ApplyFilters
    FilterByDate --> ApplyFilters
    ApplyFilters --> ShowFiltered[Show Filtered Payments]
    ShowFiltered --> ViewAll
    
    Action -->|View Details| SelectPayment[Select Payment]
    SelectPayment --> ViewPaymentDetails[View Payment Details]
    ViewPaymentDetails --> ViewStudent[View Student Info]
    ViewPaymentDetails --> ViewMethod[View Payment Method]
    ViewPaymentDetails --> ViewTimestamp[View Transaction Time]
    ViewStudent --> ViewAll
    
    Action -->|Process Refund| SelectRefundPayment[Select Paid Payment]
    SelectRefundPayment --> ConfirmRefund[Confirm Refund Request]
    ConfirmRefund --> EnterReason[Enter Refund Reason]
    EnterReason --> ProcessRefund[Process Refund]
    ProcessRefund --> NotifyStudent[Notify Student]
    NotifyStudent --> UpdateStatus[Update Payment Status]
    UpdateStatus --> LogRefund[Log Refund Action]
    LogRefund --> ViewAll
    
    Action -->|Bulk Refund| SelectMultiple[Select Multiple Payments]
    SelectMultiple --> ConfirmBulk[Confirm Bulk Refund]
    ConfirmBulk --> EnterBulkReason[Enter Reason]
    EnterBulkReason --> ProcessBulk[Process All Refunds]
    ProcessBulk --> NotifyAll[Notify All Students]
    NotifyAll --> UpdateBulkStatus[Update All Statuses]
    UpdateBulkStatus --> ViewAll
    
    Action -->|Export| ClickExportPayments[Click Export]
    ClickExportPayments --> SelectExportFormat[Select Format]
    SelectExportFormat --> GeneratePaymentReport[Generate Report]
    GeneratePaymentReport --> DownloadFile[Download File]
    DownloadFile --> ViewAll
    
    ViewAll --> Done{Done?}
    Done -->|No| Action
    Done -->|Yes| End([Complete])
```

### 5. Treasurer - Event Details & QR Code Sharing Flow
```mermaid
flowchart TD
    Start([Treasurer User]) --> Login[Login Page]
    Login --> Dashboard[Treasurer Dashboard]
    Dashboard --> EventsList[Navigate to Events]
    EventsList --> SelectEvent[Select Event]
    SelectEvent --> EventDetails[View Event Details Page]
    
    EventDetails --> ViewInfo[View Event Information]
    ViewInfo --> ViewDate[See Event Date]
    ViewInfo --> ViewBudget[See Budget Target]
    ViewInfo --> ViewRegistered[See Registered Count]
    
    EventDetails --> ViewProgress[View Collection Progress]
    ViewProgress --> ProgressBar[See Progress Bar]
    ViewProgress --> CollectedAmount[See Amount Collected]
    
    EventDetails --> PaymentList[View Payment List]
    PaymentList --> FilterPayments[Filter by Status]
    FilterPayments --> ViewIndividual[View Individual Payments]
    
    EventDetails --> ShareQR[Click Share QR Code]
    ShareQR --> OpenModal[Open Share Modal]
    OpenModal --> DisplayQR[Display QR Code]
    DisplayQR --> Action{Select Share Action}
    
    Action -->|Download| DownloadQR[Download QR as Image]
    DownloadQR --> SaveLocal[Save to Device]
    SaveLocal --> ShareManual[Share Manually]
    ShareManual --> CloseModal[Close Modal]
    
    Action -->|Copy Link| CopyPaymentLink[Copy Payment URL]
    CopyPaymentLink --> Clipboard[Link Copied to Clipboard]
    Clipboard --> PasteWhere{Where to Paste?}
    PasteWhere -->|WhatsApp| OpenWhatsApp[Open WhatsApp]
    PasteWhere -->|Email| OpenEmail[Open Email]
    PasteWhere -->|Telegram| OpenTelegram[Open Telegram]
    OpenWhatsApp --> CloseModal
    OpenEmail --> CloseModal
    OpenTelegram --> CloseModal
    
    Action -->|Print| PrintQR[Print QR Code]
    PrintQR --> PrintDialog[Open Print Dialog]
    PrintDialog --> PrintOut[Print Physical Copy]
    PrintOut --> CloseModal
    
    CloseModal --> EventDetails
    
    EventDetails --> ExportReport[Click Export Report]
    ExportReport --> GenerateReport[Generate Event Report]
    GenerateReport --> DownloadReport[Download Excel Report]
    DownloadReport --> EventDetails
    
    EventDetails --> BulkRefund[Click Bulk Refund]
    BulkRefund --> SelectPayments[Select Payments to Refund]
    SelectPayments --> ConfirmBulk[Confirm Bulk Action]
    ConfirmBulk --> EnterReason[Enter Refund Reason]
    EnterReason --> ProcessAll[Process All Refunds]
    ProcessAll --> NotifyStudents[Notify All Students]
    NotifyStudents --> UpdateList[Update Payment List]
    UpdateList --> EventDetails
    
    EventDetails --> BackToList[Back to Events List]
    BackToList --> End([Complete])
```

---

## Usage Instructions

### How to Use These Mermaid Diagrams:

1. **Copy the code block** for the flow you want to visualize
2. **Paste it into any Mermaid-compatible tool**:
   - Mermaid Live Editor: https://mermaid.live/
   - GitHub (in .md files)
   - Notion (with Mermaid blocks)
   - GitLab
   - Documentation tools (Docusaurus, MkDocs, etc.)

3. **The diagram will render automatically** showing the complete user journey

### Flow Structure:
- **Rectangle**: Process/Action step
- **Diamond**: Decision point
- **Rounded Rectangle**: Start/End points
- **Arrows**: Flow direction

### Color Coding (optional):
You can add colors by modifying the mermaid code with `style` commands at the end of each diagram.

