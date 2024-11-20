'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Laptop, BookOpen, Code, Terminal, PenTool, Puzzle, Menu, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const tutorials = [
  {
    id: 'pengenalan',
    title: 'Pengenalan Coding',
    description: 'Apa itu coding dan mengapa kita perlu mempelajarinya?',
    icon: BookOpen,
    lessons: [
      { title: 'Apa itu Coding?', duration: '5 menit' },
      { title: 'Mengapa Coding Penting?', duration: '5 menit' },
      { title: 'Apa yang Bisa Kita Buat dengan Coding?', duration: '10 menit' },
    ]
  },
  {
    id: 'dasar',
    title: 'Dasar Coding',
    description: 'Konsep dasar yang perlu kamu ketahui dalam coding',
    icon: Code,
    lessons: [
      { title: 'Variabel dan Tipe Data', duration: '15 menit' },
      { title: 'Operasi Matematika Dasar', duration: '10 menit' },
      { title: 'Kondisi (If-Else)', duration: '20 menit' },
    ]
  },
  {
    id: 'algoritma',
    title: 'Algoritma Sederhana',
    description: 'Belajar membuat langkah-langkah penyelesaian masalah',
    icon: PenTool,
    lessons: [
      { title: 'Apa itu Algoritma?', duration: '10 menit' },
      { title: 'Membuat Algoritma Sederhana', duration: '15 menit' },
      { title: 'Latihan Algoritma: Membuat Sandwich', duration: '20 menit' },
    ]
  },
  {
    id: 'scratch',
    title: 'Scratch',
    description: 'Mulai membuat program visual dengan Scratch',
    icon: Puzzle,
    lessons: [
      { title: 'Pengenalan Interface Scratch', duration: '10 menit' },
      { title: 'Membuat Karakter Bergerak', duration: '15 menit' },
      { title: 'Membuat Game Sederhana', duration: '30 menit' },
    ]
  },
]

export default function TutorialPage() {
    const [activeTab, setActiveTab] = useState('pengenalan')

    return (
        <div className="flex flex-col min-h-screen">
      {/* Header dengan posisi fixed dan backdrop blur */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 h-16 flex items-center justify-between bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80">
        <Link className="flex items-center space-x-2" href="/">
          <Laptop className="h-6 w-6 text-primary dark:text-primary-400" />
          <span className="text-xl font-bold text-primary dark:text-primary-400">RumahKoding</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/">Beranda</Link>
          <Link className="text-sm font-medium text-primary" href="#">Tutorial</Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">Proyek</Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">Diskusi</Link>
          <Button variant="outline" className="text-sm">
            <Link href="/auth-forms">Masuk</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px]">
            <nav className="flex flex-col space-y-4 mt-6">
              <Link className="text-lg font-medium hover:text-primary transition-colors" href="/">Beranda</Link>
              <Link className="text-lg font-medium text-primary" href="#">Tutorial</Link>
              <Link className="text-lg font-medium hover:text-primary transition-colors" href="#">Proyek</Link>
              <Link className="text-lg font-medium hover:text-primary transition-colors" href="#">Diskusi</Link>
              <Button className="w-full mt-4">Masuk</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      {/* Main Content with proper spacing from fixed header */}
      <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Tutorial Coding untuk Pemula</h1>
            <p className="mt-2 text-sm md:text-base text-gray-600">Mulai perjalanan coding Anda dengan tutorial interaktif</p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full h-auto bg-gray-100 rounded-lg p-2 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {tutorials.map((tutorial) => (
                  <TabsTrigger 
                    key={tutorial.id} 
                    value={tutorial.id}
                    className="flex items-center gap-2 px-3 py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all"
                  >
                    <tutorial.icon className="h-4 w-4 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-medium text-center line-clamp-1">{tutorial.title}</span>
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>

            {/* Tutorial Content */}
            {tutorials.map((tutorial) => (
              <TabsContent key={tutorial.id} value={tutorial.id}>
                <Card className="border shadow-sm">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-3 mb-6">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <tutorial.icon className="h-5 w-5 text-gray-700" />
                      </div>
                      <div>
                        <h2 className="text-lg md:text-xl font-semibold text-gray-900">{tutorial.title}</h2>
                        <p className="text-sm text-gray-600 mt-1">{tutorial.description}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {tutorial.lessons.map((lesson, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <Terminal className="h-4 w-4 text-gray-600" />
                            <span className="text-sm font-medium text-gray-800">{lesson.title}</span>
                          </div>
                          <span className="text-xs text-gray-600">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/start-learning">
                    <Button className="w-full bg-primary hover:bg-primary/90 h-9">
                        <span className="text-sm">Mulai Belajar</span>
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    </Link>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-50 dark:bg-gray-900 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
            <div className="flex items-center space-x-2">
              <Laptop className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-primary">RumahKoding</span>
            </div>

            <nav className="flex flex-wrap gap-4 md:gap-6 justify-center">
              <Link className="text-sm text-gray-600 hover:text-primary transition-colors" href="#">Tentang Kami</Link>
              <Link className="text-sm text-gray-600 hover:text-primary transition-colors" href="#">Kontak</Link>
              <Link className="text-sm text-gray-600 hover:text-primary transition-colors" href="#">Kebijakan Privasi</Link>
              <Link className="text-sm text-gray-600 hover:text-primary transition-colors" href="#">Syarat dan Ketentuan</Link>
            </nav>

            <p className="text-sm text-gray-600 text-center md:text-right">© 2023 RumahKoding. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}