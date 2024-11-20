'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Laptop, BookOpen, Users, FileCode2, ChevronRight, Star, Menu } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function HomePage() {
  const [email, setEmail] = useState("")

  // const fadeIn = {
  //   initial: { opacity: 0, y: 20 },
  //   animate: { opacity: 1, y: 0 },
  //   transition: { duration: 0.6 }
  // }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <Laptop className="h-6 w-6 text-primary dark:text-primary-400" />
          <span className="ml-2 text-xl font-bold text-primary dark:text-primary-400">RumahKoding</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4 sm:space-x-6">
          <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors" href="#">
            Beranda
          </Link>
          <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors" href="tutorial-page">
            Tutorial
          </Link>
          <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors" href="#">
            Proyek
          </Link>
          <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors" href="#">
            Diskusi
          </Link>
          <Button variant="outline" className="text-sm">
            <Link href="/auth-forms">Masuk</Link>
          </Button>
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
              <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors" href="#">
                Beranda
              </Link>
              <Link className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors" href="#">
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div 
              className="flex flex-col items-center space-y-4 text-center"
            >
              <Badge variant="secondary" className="text-sm mb-2">
                Belajar Koding Jadi Menyenangkan!
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary dark:text-primary-400">
                Belajar Koding Gratis untuk Anak SD
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Mulai petualangan kodingmu di sini! Belajar, berkreasi, dan bersenang-senang dengan teman-teman baru.
              </p>
              <div className="space-x-4">
                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 dark:bg-primary-400 dark:text-gray-900 dark:hover:bg-primary-300">
                  Mulai Belajar
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400/10">
                  Lihat Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Fitur Unggulan Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: BookOpen, title: "Tutorial Interaktif", description: "Belajar koding dengan cara yang menyenangkan dan mudah dipahami." },
                { icon: FileCode2, title: "Proyek Seru", description: "Terapkan ilmumu dengan proyek-proyek menarik dan menantang." },
                { icon: Users, title: "Komunitas Supportif", description: "Bergabung dengan teman-teman dan mentor yang siap membantumu." },
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <feature.icon className="h-12 w-12 mb-4 text-primary dark:text-primary-400" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Apa Kata Mereka?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Andi", age: 10, quote: "RumahKoding membuat saya jatuh cinta pada pemrograman!" },
                { name: "Budi", age: 11, quote: "Saya bisa membuat game sendiri sekarang. Terima kasih RumahKoding!" },
                { name: "Citra", age: 9, quote: "Belajar koding di sini sangat menyenangkan dan tidak membosankan." },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">&quot;{testimonial.quote}&quot;</p>
                    <p className="font-semibold">{testimonial.name}, {testimonial.age} tahun</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-gray-800 dark:to-gray-700">
          <div className="container px-4 md:px-6">
            <div 
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Siap untuk Mulai?</h2>
                <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bergabunglah dengan ribuan anak-anak yang sudah belajar koding di RumahKoding!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2" onSubmit={(e) => { e.preventDefault(); alert(`Email ${email} telah didaftarkan!`); }}>
                  <Input 
                    className="max-w-lg flex-1" 
                    placeholder="Masukkan email kamu" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit">Daftar</Button>
                </form>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Dengan mendaftar, kamu setuju dengan{" "}
                  <Link className="underline underline-offset-2 hover:text-primary dark:hover:text-primary-400" href="#">
                    Syarat dan Ketentuan
                  </Link>{" "}
                  kami.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "10,000+", label: "Siswa" },
                { number: "500+", label: "Tutorial" },
                { number: "1,000+", label: "Proyek" },
                { number: "50+", label: "Mentor" },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-4xl font-bold text-primary dark:text-primary-400">{stat.number}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <Laptop className="h-6 w-6 text-primary dark:text-primary-400" />
              <span className="text-xl font-bold text-primary dark:text-primary-400">RumahKoding</span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-sm hover:underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400" href="#">
                Tentang Kami
              </Link>
              <Link className="text-sm hover:underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400" href="#">
                Kontak
              </Link>
              <Link className="text-sm hover:underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400" href="#">
                Kebijakan Privasi
              </Link>
              <Link className="text-sm hover:underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400" href="#">
                Syarat dan Ketentuan
              </Link>
            </nav>
            <p className="text-sm text-gray-600 dark:text-gray-400">© 2023 RumahKoding. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}