import { ThemeProvider } from "@/components/providers/theme-provider";
import '@/app/(root)/globals.css'
import {Poppins} from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={poppins.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableColorScheme
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}