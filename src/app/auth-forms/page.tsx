'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Laptop, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

export default function AuthForms() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Laptop className="h-6 w-6 text-primary dark:text-primary-400" />
          <span className="ml-2 text-xl font-bold text-primary dark:text-primary-400">RumahKoding</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <Tabs defaultValue="login" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Masuk</TabsTrigger>
            <TabsTrigger value="register">Daftar</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </main>
      <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © 2023 RumahKoding. Semua hak cipta dilindungi.
      </footer>
    </div>
  )
}

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Masuk ke RumahKoding</CardTitle>
        <CardDescription>Masukkan email dan kata sandi Anda untuk melanjutkan</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="nama@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Kata Sandi</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan kata sandi"
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button className="w-full">Masuk</Button>
        <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
          Lupa kata sandi?{" "}
          <Link href="#" className="text-primary hover:underline">
            Reset di sini
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daftar di RumahKoding</CardTitle>
        <CardDescription>Buat akun baru untuk memulai petualangan kodingmu</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nama Lengkap</Label>
          <Input id="name" placeholder="Masukkan nama lengkap" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="nama@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Kata Sandi</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Buat kata sandi"
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="age">Umur</Label>
          <Input id="age" type="number" placeholder="Masukkan umur" required />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button className="w-full">Daftar</Button>
        <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
          Sudah punya akun?{" "}
          <Link href="#" className="text-primary hover:underline">
            Masuk di sini
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}