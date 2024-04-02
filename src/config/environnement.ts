import { Environnement } from "@config/environnement.enum"

declare global {
  interface Window {
    env: typeof Environnement
  }
}

export const config = {
    API_URL:
      window?.env?.[Environnement.REACT_APP_API_URL] || import.meta.env[Environnement.REACT_APP_API_URL] ||
      'https://dev-monitor.urbasolar.com/api',
    GRAPHQL_URL: window?.env?.[Environnement.REACT_APP_GRAPHQL_URL] || import.meta.env[Environnement.REACT_APP_GRAPHQL_URL] || '',
    NAME: window?.env?.[Environnement.REACT_APP_NAME] || import.meta.env[Environnement.REACT_APP_NAME] || 'app-front-dev',
    REALM: window?.env?.[Environnement.REACT_APP_REALM] || import.meta.env[Environnement.REACT_APP_REALM] || 'Development',
    URL:
      window?.env?.[Environnement.REACT_APP_URL] || import.meta.env[Environnement.REACT_APP_URL] || 'https://authenticate.urbasolar.com/auth',
    SSL_REQUIRED:
      window?.env?.[Environnement.REACT_APP_SSL_REQUIRED] || import.meta.env[Environnement.REACT_APP_SSL_REQUIRED] || 'external',
    CLIENTID:
      window?.env?.[Environnement.REACT_APP_CLIENTID] || import.meta.env[Environnement.REACT_APP_CLIENTID] || 'Monitor-Local-Front',
    PUBLIC_CLIENT:
      window?.env?.[Environnement.REACT_APP_PUBLIC_CLIENT] || import.meta.env[Environnement.REACT_APP_PUBLIC_CLIENT] || true,
    CONFIDENTIAL_PORT:
      window?.env?.[Environnement.REACT_APP_CONFIDENTIAL_PORT] || import.meta.env[Environnement.REACT_APP_CONFIDENTIAL_PORT] || 0,
    APM_SERVER_URL:
      window?.env?.[Environnement.REACT_APP_APM_SERVER_URL] || import.meta.env[Environnement.REACT_APP_APM_SERVER_URL] || '',
    AIRTABLE_HPE_PLANNING_LINK:
      window?.env?.[Environnement.REACT_APP_AIRTABLE_HPE_PLANNING_LINK] || import.meta.env[Environnement.REACT_APP_AIRTABLE_HPE_PLANNING_LINK] ||
      '',
    AIRTABLE_HPE_SUPERVISOR_FIELD_ID:
      window?.env?.[Environnement.REACT_APP_AIRTABLE_HPE_SUPERVISOR_FIELD_ID] || import.meta.env[Environnement.REACT_APP_AIRTABLE_HPE_SUPERVISOR_FIELD_ID] ||
      '',
    AIRTABLE_HPE_CENTRALES_FIELD_ID:
      window?.env?.[Environnement.REACT_APP_AIRTABLE_HPE_CENTRALES_FIELD_ID] || import.meta.env[Environnement.REACT_APP_AIRTABLE_HPE_CENTRALES_FIELD_ID] ||
      '',
    EVENTS_ENABLED:
      window?.env?.[Environnement.REACT_APP_EVENTS_ENABLED] || import.meta.env[Environnement.REACT_APP_EVENTS_ENABLED] || '',
  }