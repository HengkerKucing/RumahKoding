'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Laptop, Menu, ChevronRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function LessonPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="/">
          <Laptop className="h-6 w-6 text-primary dark:text-primary-400" />
          <span className="ml-2 text-xl font-bold text-primary dark:text-primary-400">RumahKoding</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4 sm:space-x-6">
          <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors" href="/">
            Beranda
          </Link>
          <Link className="text-sm font-medium text-primary dark:text-primary-400" href="#">
            Tutorial
          </Link>
          <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors" href="#">
            Proyek
          </Link>
          <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors" href="#">
            Diskusi
          </Link>
          <Button variant="outline" className="text-sm">Masuk</Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors" href="/">
                Beranda
              </Link>
              <Link className="text-sm font-medium text-primary dark:text-primary-400" href="#">
                Tutorial
              </Link>
              <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors" href="#">
                Proyek
              </Link>
              <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors" href="#">
                Diskusi
              </Link>
              <Button variant="outline" className="text-sm w-full">
                <Link href="/auth-forms">Masuk</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Pengenalan ke Dunia Coding</h1>
          <p className="text-gray-600 mb-6">Mari kita mulai perjalanan coding kita dengan memahami apa itu coding dan mengapa kita perlu mempelajarinya.</p>
          
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Poin-poin Penting:</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Coding adalah cara kita memberi instruksi kepada komputer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Belajar coding membantu mengembangkan pemikiran logis dan pemecahan masalah</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Coding digunakan dalam berbagai bidang, tidak hanya teknologi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Banyak bahasa pemrograman yang bisa dipelajari, mulai dari yang sederhana hingga kompleks</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center">
            <Button variant="outline">Kembali ke Daftar Pelajaran</Button>
            <Button className="bg-black hover:bg-black/90 text-white">
              Pelajaran Selanjutnya
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      <footer className="w-full py-6 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <Laptop className="h-6 w-6 text-primary dark:text-primary-400" />
              <span className="text-xl font-bold text-primary dark:text-primary-400">RumahKoding</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link className="text-sm hover:underline underline-offset-4 text-gray-600 hover:text-primary" href="#">
                Tentang Kami
              </Link>
              <Link className="text-sm hover:underline underline-offset-4 text-gray-600 hover:text-primary" href="#">
                Kontak
              </Link>
              <Link className="text-sm hover:underline underline-offset-4 text-gray-600 hover:text-primary" href="#">
                Kebijakan Privasi
              </Link>
              <Link className="text-sm hover:underline underline-offset-4 text-gray-600 hover:text-primary" href="#">
                Syarat dan Ketentuan
              </Link>
            </nav>
            <p className="text-sm text-gray-600">© 2023 RumahKoding. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}