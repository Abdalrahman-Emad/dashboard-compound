import { createBrowserRouter } from 'react-router-dom';

import { DashboardShell } from './components';
import { LoginPage, RegisterPage, DashboardPage, SettingsPage, UsersPage } from './pages';
import AuthenticationPage from './pages/MyCommunity/AuthenticationPage';
import NewUnitRequestPage from './pages/MyCommunity/NewUnitRequestPage';
import UnitsPage from './pages/MyCommunity/UnitsPage';
import ResidentsPage from './pages/MyCommunity/ResidentsPage';
import AddResidentPage from './pages/MyCommunity/AddResidentPage';
import EditUnitsPage from './pages/MyCommunity/EditUnitsPage';
import Complaints from './pages/FacilityManagement/ComplaintsPage';
import Services from './pages/FacilityManagement/ServicesPage';
import EditRequestPage from './pages/FacilityManagement/EditRequestPage';
import RequestsPermissionPage from './pages/RequestsPermission/RequestsPermissionPage';
import CommunityEventsPage from './pages/SocialCommunication/CommunityEventsPage';
import ReportedPostsPage from './pages/SocialCommunication/ReportedPostsPage';
import DiscussionsPage from './pages/SocialCommunication/DiscussionsPage';
import AddDiscussionsPage from './pages/SocialCommunication/AddDiscussionsPage';
import AddEventsPage from './pages/SocialCommunication/AddEventsPage';
import ReportsDetailsPage from './pages/SocialCommunication/ReportsDetailsPage';
import ContactsDirectoryPage from './pages/CommunityInfo/ContactsDirectoryPage';
import CommunityMapPage from './pages/CommunityInfo/CommunityMapPage';
import GuidelinesAndPoliciesPage from './pages/CommunityInfo/GuidelinesAndPoliciesPage';
import UserSupportPage from './pages/CommunityInfo/UserSupportPage';
import FinancialBlockUnitsPage from './pages/FinancialBlock/UnitsPage';
import MassBlockingPage from './pages/FinancialBlock/MassBlockingPage';
import VisitorGateAccessPage from './pages/CommunityReporting/VisitorGateAccessPage';
import OwnersGateAccessPage from './pages/CommunityReporting/OwnersGateAccessPage';
import ServiceOperationReportPage from './pages/CommunityReporting/ServiceOperationReportPage';
import AuthenticationTrackingPage from './pages/CommunityReporting/AuthenticationTrackingPage';
import ShopOrdersPages from './pages/CommunityReporting/ShopOrdersPages';
import GatePassMaxLogPage from './pages/CommunityReporting/GatePassMaxLogPage';
import IssuedGateNotificationsPage from './pages/CommunityReporting/IssuedGateNotificationsPage';
import IssuedGateInvitationsPage from './pages/CommunityReporting/IssuedGateInvitationsPage';
import OutletReservationsReportPage from './pages/CommunityReporting/OutletReservationsReportPage';
import AccessControlSchedulePage from './pages/CommunitySettings/AccessControlSchedulePage';
import CRMFieldsPage from './pages/CommunitySettings/CRMFieldsPage';
import GatePassTypePage from './pages/CommunitySettings/GatePassTypePage';
import IssueCategoriesPage from './pages/CommunitySettings/IssueCategoriesPage';
import IssueLocationPage from './pages/CommunitySettings/IssueLocationPage';
import PermissionPage from './pages/CommunitySettings/PermissionPage';
import PhasesAndZonesPage from './pages/CommunitySettings/PhasesAndZonesPage';
import RequestAndPermissionPage from './pages/CommunitySettings/RequestAndPermissionPage';
import ServiceCategoriesPage from './pages/CommunitySettings/ServiceCategoriesPage';
import ServiceListPage from './pages/CommunitySettings/ServiceListPage';
import TagsPage from './pages/CommunitySettings/TagsPage';
import UnitStatusPage from './pages/CommunitySettings/UnitStatusPage';
import UnitsTypePage from './pages/CommunitySettings/UnitsTypePage';
import UploadOwnerDetails from './pages/CommunitySettings/UploadOwnerDetails';
import CRMCardsTrackerPage from './pages/Administration/CRMCardsTrackerPage';
import EmailNotificationsPage from './pages/Administration/EmailNotificationsPage';
import GateReaderAccountPage from './pages/Administration/GateReaderAccountPage';
import GuardAccessAccountPage from './pages/Administration/GuardAccessAccountPage';
import OtherSettingsPage from './pages/Administration/OtherSettingsPage';
import OutletPage from './pages/Administration/OutletPage';
import UserAdministrationPage from './pages/Administration/UserAdministrationPage';
import UserPermissionPage from './pages/Administration/UserPermissionPage';
import EditEmailNotificationsPage from './pages/Administration/EditEmailNotificationsPage';
import PushNotificationsPage from './pages/Messaging/PushNotificationsPage';
import IndividualMessagingPage from './pages/Messaging/IndividualMessagingPage';
import IndividualChat from './pages/Messaging/IndividualChat';
import SecurityRequestsPage from './pages/RequestsPermission/SecurityRequestsPage';
import AddUnitsPage from './pages/MyCommunity/AddUnitsPage';
import UnitDetailesPage from './pages/MyCommunity/UnitDetailesPage';
import ComplaintsDetailesPage from './pages/FacilityManagement/ComplaintsDetailesPage';
import Permission from './pages/RequestsPermission/Permission';
import PermissionView from './pages/RequestsPermission/PermissionView';
import News from './pages/SocialCommunication/News';
import { AddNews } from './pages/SocialCommunication/AddNews';
import AddComplaintsPage from './pages/FacilityManagement/AddComplaintsPage';
import UpdatePermission from './pages/RequestsPermission/UpdatePermission';
import AddOwnerProfile from './pages/Profile/AddOwnerProfile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/dashboard',
        element: <DashboardShell />,
        children: [
            {
                path: '',
                element: <DashboardPage />,
            },
            {
                path: 'users',
                element: <UsersPage />,
            },
            {
                path: 'settings',
                element: <SettingsPage />,
            },

            {
                path: 'community',
                children: [
                    {
                        path: 'authentication',
                        element: <AuthenticationPage />,
                    },
                    {
                        path: 'new-unit-request',
                        element: <NewUnitRequestPage />,
                    },
                    {
                        path: 'residents',
                        children: [
                            {
                                path: '',
                                element: <ResidentsPage />,
                            },
                            {
                                path: 'add-resident',
                                element: <AddResidentPage />,
                            },
                        ],
                    },

                    {
                        path: 'units',
                        children: [
                            {
                                path: '',
                                element: <UnitsPage />,
                            },
                            {
                                path: 'edit-units',
                                element: <EditUnitsPage />,
                            },
                            {
                                path: 'add-units',
                                element: <AddUnitsPage />,
                            },
                            {
                                path: 'unit-detailes',
                                element: <UnitDetailesPage />,
                            },
                        ],
                    },
                ],
            },

            {
                path: 'facility-management',
                children: [
                    {
                        path: 'complaints',
                        children: [
                            {
                                path: '',
                                element: <Complaints />,
                            },
                            {
                                path: 'add-complaints',
                                element: <AddComplaintsPage />,
                            },
                            // Optionally, you can include details page in the same level
                            {
                                path:'complaints-detailes',
                                element: <ComplaintsDetailesPage />
                            },
                        ],                    },

                    {
                        path: 'services',
                        children: [
                            {
                                path: '',
                                element: <Services />,
                            },
                            {
                                path: 'edit-request',
                                element: <EditRequestPage />,
                            },
                        ],
                    },
                ],
            },
            {
                path: 'requests-permission',
                children: [
                    {
                        path: 'requests',
                        element: <RequestsPermissionPage />,
                    },
                    {
                        path: 'security-requests',
                        element: <SecurityRequestsPage />,
                    },
                    {
                        path: 'permission',
                        element: <Permission />,
                    },
                    {
                        path: 'view',
                        element: <PermissionView />,
                    },
                    {
                        path: 'update',
                        element: <UpdatePermission permission={{ id: 0, type: '', unitName: '', projectName: '', date: '', time: '', status: '', names: [] }} onUpdatePermission={(id: number) => {}} />,
                    },
                    
                ],
            },
            {
                path: 'social-communication',
                children: [
                    {
                        path: 'discussions',
                        children: [
                            {
                                path: '',
                                element: <DiscussionsPage />,
                            },
                            {
                                path: 'add-discussions',
                                element: <AddDiscussionsPage />,
                            },
                        ],
                    },
                    {
                        path: 'news',
                        children: [
                            {
                                path: '',
                                element: <News />,
                            },

                            {
                                path: 'addnews',
                                children: [
                                    {
                                        path: '',
                                        element: <AddNews />,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        path: 'community-events',
                        children: [
                            {
                                path: '',
                                element: <CommunityEventsPage />,
                            },
                            {
                                path: 'add-events',
                                element: <AddEventsPage />,
                            },
                        ],
                    },
                    {
                        path: 'reported-posts',
                        children: [
                            {
                                path: '',
                                element: <ReportedPostsPage />,
                            },
                            {
                                path: 'details/:id',
                                element: <ReportsDetailsPage />,
                            },
                        ],
                    },
                ],
            },
            {
                path: 'community-info',
                children: [
                    {
                        path: 'contacts-directory',
                        element: <ContactsDirectoryPage />,
                    },
                    {
                        path: 'community-map',
                        element: <CommunityMapPage />,
                    },
                    {
                        path: 'guidelines-policies',
                        element: <GuidelinesAndPoliciesPage />,
                    },
                    {
                        path: 'user-support',
                        element: <UserSupportPage />,
                    },
                ],
            },
            {
                path: 'financial-block',
                children: [
                    {
                        path: 'unit',
                        element: <FinancialBlockUnitsPage />,
                    },
                    {
                        path: 'mass-blocking',
                        element: <MassBlockingPage />,
                    },
                ],
            },
            {
                path: 'community-reporting',
                children: [
                    {
                        path: 'visitor-gate-access',
                        element: <VisitorGateAccessPage />,
                    },
                    {
                        path: 'owners-gate-access',
                        element: <OwnersGateAccessPage />,
                    },
                    {
                        path: 'service-operation-report',
                        element: <ServiceOperationReportPage />,
                    },
                    {
                        path: 'authentication-tracking',
                        element: <AuthenticationTrackingPage />,
                    },
                    {
                        path: 'shop-orders',
                        element: <ShopOrdersPages />,
                    },
                    {
                        path: 'gate-pass-max-log',
                        element: <GatePassMaxLogPage />,
                    },
                    {
                        path: 'issued-gate-invitations',
                        element: <IssuedGateInvitationsPage />,
                    },
                    {
                        path: 'issued-gate-notifications',
                        element: <IssuedGateNotificationsPage />,
                    },
                    {
                        path: 'outlet-reservations-report',
                        element: <OutletReservationsReportPage />,
                    },
                ],
            },
            {
                path: 'community-settings',
                children: [
                    {
                        path: 'access-control-schedule',
                        element: <AccessControlSchedulePage />,
                    },
                    {
                        path: 'crm-fields',
                        element: <CRMFieldsPage />,
                    },
                    {
                        path: 'gate-pass-type',
                        element: <GatePassTypePage />,
                    },
                    {
                        path: 'issue-categories',
                        element: <IssueCategoriesPage />,
                    },
                    {
                        path: 'issue-location',
                        element: <IssueLocationPage />,
                    },
                    {
                        path: 'permission',
                        element: <PermissionPage />,
                    },
                    {
                        path: 'phases-zones',
                        element: <PhasesAndZonesPage />,
                    },
                    {
                        path: 'request-permission',
                        element: <RequestAndPermissionPage />,
                    },
                    {
                        path: 'service-categories',
                        element: <ServiceCategoriesPage />,
                    },
                    {
                        path: 'service-list',
                        element: <ServiceListPage />,
                    },
                    {
                        path: 'tags',
                        element: <TagsPage />,
                    },
                    {
                        path: 'unit-status',
                        element: <UnitStatusPage />,
                    },
                    {
                        path: 'units-type',
                        element: <UnitsTypePage />,
                    },
                    {
                        path: 'upload-owner-details',
                        element: <UploadOwnerDetails />,
                    },
                ],
            },
            {
                path: 'administration',
                children: [
                    {
                        path: 'crm-card-tracker',
                        element: <CRMCardsTrackerPage />,
                    },
                    {
                        path: 'email-notifications',
                        children: [
                            {
                                path: '',
                                element: <EmailNotificationsPage />,
                            },
                            {
                                path: ':id',
                                element: <EditEmailNotificationsPage />,
                            },
                        ],
                    },
                    {
                        path: 'gate-reader-account',
                        element: <GateReaderAccountPage />,
                    },
                    {
                        path: 'guard-access-account',
                        element: <GuardAccessAccountPage />,
                    },
                    {
                        path: 'other-settings',
                        element: <OtherSettingsPage />,
                    },
                    {
                        path: 'outlet',
                        element: <OutletPage />,
                    },
                    {
                        path: 'user-administration',
                        children: [
                            {
                                path: '',
                                element: <UserAdministrationPage />,
                            },
                            {
                                path: ':id',
                                element: <UserPermissionPage />,
                            },
                        ],
                    },
                ],
            },
            {
                path: 'messaging',
                children: [
                    {
                        path: 'notifications',
                        element: <PushNotificationsPage />,
                    },
                    {
                        path: 'individual',
                        element: <IndividualMessagingPage />,
                        children: [
                            {
                                path: ':id',
                                element: <IndividualChat />,
                            },
                        ],
                    },
                    {
                        path: 'gate-reader-account',
                        element: <GateReaderAccountPage />,
                    },
                    {
                        path: 'guard-access-account',
                        element: <GuardAccessAccountPage />,
                    },
                    {
                        path: 'other-settings',
                        element: <OtherSettingsPage />,
                    },
                    {
                        path: 'outlet',
                        element: <OutletPage />,
                    },
                    {
                        path: 'user-administration',
                        children: [
                            {
                                path: '',
                                element: <UserAdministrationPage />,
                            },
                            {
                                path: ':id',
                                element: <UserPermissionPage />,
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);

export default router;
