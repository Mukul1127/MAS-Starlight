import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import { vite as vidstack } from "vidstack/plugins";

// https://astro.build/config
export default defineConfig({
  site: "https://massgrave.dev",
  integrations: [
    starlight({
      title: "MAS",
      favicon: "/favicon.ico",
      logo: {
        src: "@/assets/logo_small.png"
      },
      customCss: ["@/styles/fonts.css", "@/styles/custom.css"],
      editLink: {
        baseUrl:
          "https://github.com/massgravel/Microsoft-Activation-Scripts/edit/main/docs/"
      },
      social: {
        discord: "https://discord.gg/tVFN4N84PP",
        github: "https://github.com/massgravel/Microsoft-Activation-Scripts"
      },
      sidebar: [
        {
          label: "(None)",
          items: [
            {
              label: "Intro",
              link: "/"
            },
            {
              label: "FAQ",
              link: "/faq"
            },
            {
              label: "Troubleshoot",
              link: "/troubleshoot"
            },
            {
              label: "Download Genuine Media",
              link: "/genuine_installation_media"
            }
          ]
        },
        {
          label: "Docs",
          items: [
            {
              label: "HWID Activation",
              link: "/docs/hwid"
            },
            {
              label: "KMS38 Activation",
              link: "/docs/kms38"
            },
            {
              label: "Ohook Activation",
              link: "/docs/ohook"
            },
            {
              label: "Online KMS Activation",
              link: "/docs/online_kms"
            },
            {
              label: "Command Line Switches",
              link: "/docs/command_line_switches"
            },
            {
              label: "Check Activation Status",
              link: "/docs/check_activation_status"
            },
            {
              label: "$OEM$ Folders",
              link: "/docs/oem_folder"
            },
            {
              label: "Change Windows Edition",
              link: "/docs/change_edition"
            }
          ]
        },
        {
          label: "(None)",
          items: [
            {
              label: "Guides",
              link: "/guides"
            },
            {
              label: "News",
              link: "/news"
            },
            {
              label: "Changelog",
              link: "/changelog"
            },
            {
              label: "Unsupported Products Activation",
              link: "/unsupported_products_activation"
            },
            {
              label: "Our Non-Piracy Site",
              link: "/our_non_piracy_site"
            },
            {
              label: "Credits",
              link: "/credits"
            },
            {
              label: "Contact Us",
              link: "/contactus"
            }
          ]
        }
      ]
    }),
    (await import("@playform/compress")).default()
  ],
  vite: {
    plugins: [vidstack()],
    css: {
      transformer: "lightningcss"
    },
    build: {
      cssMinify: "lightningcss"
    }
  }
});
