import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors : true
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};

export default withSentryConfig(withSentryConfig(withSentryConfig(nextConfig, {
silent: !process.env.CI,
widenClientFileUpload: true,
hideSourceMaps: true,
disableLogger: true,
automaticVercelMonitors: true,
org: "the-brain-studio",
project: "javascript-nextjs",

})));