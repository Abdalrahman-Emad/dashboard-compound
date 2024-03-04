import { NavLink, Navbar, Divider, Stack } from '@mantine/core';
import {
    IconSettings,
    IconDashboard,
    IconCash,
    IconNews,
    IconSocial,
    IconUser,
    IconAdjustmentsHorizontal,
    IconMessage2,
    IconLicense,
    IconLayout2,
    IconChartPie,
    IconId ,
} from '@tabler/icons';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';

export const DashboardNavbar = () => {
    const location = useLocation();

    const isActiveLink = (path: string) => {
        const pathArray = location.pathname.split('/');
        const lastPath = pathArray[pathArray.length - 1];
        return lastPath === path;
    };

    return (
        <Navbar p="xs" width={{ base: 300 }}>
            <Navbar.Section mt="xs">Logo Here</Navbar.Section>
            <Divider />
            <Navbar.Section sx={{ overflowY: 'auto' }} grow mx="-xs" px="xs">
                <Stack py="md">
                    <NavLink
                        icon={<IconDashboard />}
                        component={RouterNavLink}
                        label="Dashboard"
                        to="."
                        active={isActiveLink('dashboard')}
                    />
                    
                    <NavLink label="My Community" icon={<IconLayout2 size={24} stroke={1.5} />} childrenOffset={28}>
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Authentication"
                            to="community/authentication"
                            active={isActiveLink('authentication')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="New Unit Request"
                            to="community/new-unit-request"
                            active={isActiveLink('new-unit-request')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Residents"
                            to="community/residents"
                            active={isActiveLink('residents')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Units"
                            to="community/units"
                            active={isActiveLink('units')}
                        />
                    </NavLink>
                    <NavLink
                        label="Facility Management"
                        icon={<IconAdjustmentsHorizontal size={24} stroke={1.5} />}
                        childrenOffset={28}
                    >
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Complaints"
                            to="facility-management/complaints"
                            active={isActiveLink('complaints')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="services"
                            to="facility-management/services"
                            active={isActiveLink('services')}
                        />
                    </NavLink>

                    <NavLink label="Requests" icon={<IconAdjustmentsHorizontal />} childrenOffset={28}>
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Requests"
                            to="requests-permission/requests"
                            active={isActiveLink('requests')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Security Requests report"
                            to="requests-permission/security-requests"
                            active={isActiveLink('security-requests')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Permissions"
                            to="requests-permission/view"
                            active={isActiveLink('view')}
                        />
                    </NavLink>
                    <NavLink icon={<IconMessage2 />} label="Messaging" childrenOffset={28}>
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Individual Messaging"
                            to="messaging/individual"
                            active={isActiveLink('individual')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Push Notifications"
                            to="messaging/notifications"
                            active={isActiveLink('notifications')}
                        />
                    </NavLink>
                    <NavLink
                        icon={<IconSocial />}
                        label="Social Communication"
                        active={isActiveLink('Social')}
                        childrenOffset={28}
                    >
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Timeline Discussions"
                            to="social-communication/discussions"
                            active={isActiveLink('discussions')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="News"
                            to="/dashboard/social-communication/news"
                            active={isActiveLink('news')}
                        />

                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Community Events"
                            to="social-communication/community-events"
                            active={isActiveLink('community-events')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Reported Posts"
                            to="social-communication/reported-posts"
                            active={isActiveLink('reported-posts')}
                        />
                    </NavLink>
                    <NavLink icon={<IconNews />} label="Community Info">
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Contacts Directory"
                            to="community-info/contacts-directory"
                            active={isActiveLink('contacts-directory')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Community Map"
                            to="community-info/community-map"
                            active={isActiveLink('community-map')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Guidelines & Policies"
                            to="community-info/guidelines-policies"
                            active={isActiveLink('guidelines-policies')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="User Support"
                            to="community-info/user-support"
                            active={isActiveLink('user-support')}
                        />
                    </NavLink>
                    <NavLink icon={<IconCash />} label="Financial Block" childrenOffset={28}>
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Unit"
                            to="financial-block/unit"
                            active={isActiveLink('unit')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Mass Blocking"
                            to="financial-block/mass-blocking"
                            active={isActiveLink('mass-blocking')}
                        />
                    </NavLink>
                    <NavLink icon={<IconChartPie />} label="Community Reporting">
                        <NavLink
                            component={RouterNavLink}
                            label="Visitor Gate Access"
                            to="community-reporting/visitor-gate-access"
                            active={isActiveLink('visitor-gate-access')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Owners Gate Access"
                            to="community-reporting/owners-gate-access"
                            active={isActiveLink('owners-gate-access')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Service operation report"
                            to="community-reporting/service-operation-report"
                            active={isActiveLink('service-operation-report')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Authentication Tracking"
                            to="community-reporting/authentication-tracking"
                            active={isActiveLink('authentication-tracking')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Shop Orders"
                            to="community-reporting/shop-orders"
                            active={isActiveLink('shop-orders')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Gate Pass Max Log"
                            to="community-reporting/gate-pass-max-log"
                            active={isActiveLink('gate-pass-max-log')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Issued Gate Invitations"
                            to="community-reporting/issued-gate-invitations"
                            active={isActiveLink('issued-gate-invitations')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Issued Gate Notifications"
                            to="community-reporting/issued-gate-notifications"
                            active={isActiveLink('issued-gate-notifications')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Outlet Reservations Report"
                            to="community-reporting/outlet-reservations-report"
                            active={isActiveLink('outlet-reservations-report')}
                        />
                    </NavLink>

                    <NavLink icon={<IconSettings />} label="Community Settings">
                        <NavLink
                            component={RouterNavLink}
                            label="Access Control Schedule"
                            to="community-settings/access-control-schedule"
                            active={isActiveLink('access-control-schedule')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="CRM Fields"
                            to="community-settings/crm-fields"
                            active={isActiveLink('crm-fields')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Gate Pass Type"
                            to="community-settings/gate-pass-type"
                            active={isActiveLink('gate-pass-type')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Issue Categories"
                            to="community-settings/issue-categories"
                            active={isActiveLink('issue-categories')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Issue Location"
                            to="community-settings/issue-location"
                            active={isActiveLink('issue-location')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Permission"
                            to="community-settings/permission"
                            active={isActiveLink('permission')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Phases Zones"
                            to="community-settings/phases-zones"
                            active={isActiveLink('phases-zones')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Request Permission"
                            to="community-settings/request-permission"
                            active={isActiveLink('request-permission')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Service Categories"
                            to="community-settings/service-categories"
                            active={isActiveLink('service-categories')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Service List"
                            to="community-settings/service-list"
                            active={isActiveLink('service-list')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Tags"
                            to="community-settings/tags"
                            active={isActiveLink('tags')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Unit Status"
                            to="community-settings/unit-status"
                            active={isActiveLink('unit-status')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Units Type"
                            to="community-settings/units-type"
                            active={isActiveLink('units-type')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Upload Owner Details"
                            to="community-settings/upload-owner-details"
                            active={isActiveLink('upload-owner-details')}
                        />
                    </NavLink>
                    <NavLink icon={<IconLicense />} label="administration">
                        <NavLink
                            component={RouterNavLink}
                            label="User Administration"
                            to="administration/user-administration"
                            active={isActiveLink('user-administration')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="CRM Card Tracker"
                            to="administration/crm-card-tracker"
                            active={isActiveLink('crm-card-tracker')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Email Notifications"
                            to="administration/email-notifications"
                            active={isActiveLink('email-notifications')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Gate Reader Account"
                            to="administration/gate-reader-account"
                            active={isActiveLink('gate-reader-account')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Guard Access Account"
                            to="administration/guard-access-account"
                            active={isActiveLink('guard-access-account')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Other Settings"
                            to="administration/other-settings"
                            active={isActiveLink('other-settings')}
                        />
                        <NavLink
                            component={RouterNavLink}
                            label="Outlet"
                            to="administration/outlet"
                            active={isActiveLink('outlet')}
                        />
                    </NavLink>
                    <NavLink
                        icon={<IconUser />}
                        component={RouterNavLink}
                        label="users"
                        to="#"
                        active={isActiveLink('users')}
                    />
                    <NavLink label="vistors" icon={<IconId size={24} stroke={1.5} />} >
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="HomePage"
                            to="HomePage"
                            active={isActiveLink('HomePage')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Visitors"
                            to="Visitors"
                            active={isActiveLink('Visitors')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="HomeServices"
                            to="HomeServices"
                            active={isActiveLink('HomeServices')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="Marketing"
                            to="Marketing"
                            active={isActiveLink('Marketing')}
                        />
                        <NavLink
                            color="dark"
                            component={RouterNavLink}
                            label="BillingServices"
                            to="BillingServices"
                            active={isActiveLink('BillingServices')}
                        />
                    </NavLink>
                    <NavLink
                        icon={<IconSettings />}
                        component={RouterNavLink}
                        label="Settings"
                        to="#"
                        active={isActiveLink('settings')}
                    />
                </Stack>
            </Navbar.Section>
            <Divider />
            <Navbar.Section>Another bottom fixed section</Navbar.Section>
        </Navbar>
    );
};
