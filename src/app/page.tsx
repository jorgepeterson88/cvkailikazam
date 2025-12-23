'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Building, 
  HardHat, 
  Users, 
  Shield,
  ChevronRight,
  Menu,
  X
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      title: "Jasa Konstruksi Bangunan",
      description: "Pembangunan rumah, gedung perkantoran, dan struktur bangunan lainnya dengan standar kualitas tertinggi.",
      icon: Building
    },
    {
      title: "Renovasi & Perbaikan",
      description: "Layanan renovasi bangunan, perbaikan struktur, dan peningkatan fasilitas properti Anda.",
      icon: HardHat
    },
    {
      title: "Konsultasi Konstruksi",
      description: "Konsultasi profesional untuk perencanaan dan pelaksanaan proyek konstruksi Anda.",
      icon: Users
    }
  ]

  const achievements = [
    "10+ Tahun Pengalaman",
    "50+ Proyek Selesai",
    "100% Kepuasan Klien",
    "Sertifikat Konstruksi"
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/logo-kaili-kazam.png" 
              alt="CV KAILI KAZAM Logo" 
              className="h-10 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-orange-600">CV KAILI KAZAM</h1>
              <p className="text-sm text-muted-foreground">Profesional Konstruksi</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-sm font-medium hover:text-orange-600 transition-colors">Beranda</a>
            <a href="#services" className="text-sm font-medium hover:text-orange-600 transition-colors">Layanan</a>
            <a href="#about" className="text-sm font-medium hover:text-orange-600 transition-colors">Tentang</a>
            <a href="#contact" className="text-sm font-medium hover:text-orange-600 transition-colors">Kontak</a>
            <Button className="bg-orange-600 hover:bg-orange-700">
              Hubungi Kami
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container py-4 space-y-3">
              <a href="#home" className="block text-sm font-medium hover:text-orange-600 transition-colors">Beranda</a>
              <a href="#services" className="block text-sm font-medium hover:text-orange-600 transition-colors">Layanan</a>
              <a href="#about" className="block text-sm font-medium hover:text-orange-600 transition-colors">Tentang</a>
              <a href="#contact" className="block text-sm font-medium hover:text-orange-600 transition-colors">Kontak</a>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                Hubungi Kami
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative">
        <div className="absolute inset-0">
          <img 
            src="/construction-hero.jpg" 
            alt="Construction Site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container py-24 md:py-32">
          <div className="max-w-3xl text-white">
            <Badge className="mb-4 bg-orange-600 text-white">
              Profesional & Terpercaya
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CV KAILI KAZAM
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Solusi Konstruksi Terpercaya untuk Semua Kebutuhan Bangunan Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Konsultasi Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Lihat Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Layanan Konstruksi Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Menyediakan layanan konstruksi komprehensif dengan standar kualitas tertinggi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="mt-4 p-0 h-auto text-orange-600 hover:text-orange-700">
                    Pelajari Lebih Lanjut
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/team-meeting.jpg" 
                alt="Team Meeting" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-orange-600 text-white">
                Tentang Kami
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mengapa Memilih CV KAILI KAZAM?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                CV KAILI KAZAM adalah perusahaan konstruksi profesional yang telah berpengalaman 
                dalam mengerjakan berbagai proyek bangunan dengan kualitas terbaik dan tepat waktu.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Kami berkomitmen untuk memberikan layanan konstruksi yang memenuhi standar 
                keselamatan, kualitas, dan kepuasan pelanggan.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Memulai Proyek Konstruksi Anda?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik untuk proyek Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              <Phone className="mr-2 h-4 w-4" />
              Hubungi Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              <Mail className="mr-2 h-4 w-4" />
              Kirim Email
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-muted-foreground">
              Kami siap membantu mewujudkan proyek konstruksi Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Alamat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  JL. ELANG NO. 41, Kel. Sungai Pinang Dalam<br />
                  Kec. Sungai Pinang, Kota Samarinda<br />
                  Prov. Kalimantan Timur 75117
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Telepon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  081931987647
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Jam Operasional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Senin - Jumat: 08:00 - 17:00<br />
                  Sabtu: 08:00 - 12:00<br />
                  Minggu: Tutup
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo-kaili-kazam.png" 
                  alt="CV KAILI KAZAM Logo" 
                  className="h-8 w-auto"
                />
                <h3 className="text-lg font-bold">CV KAILI KAZAM</h3>
              </div>
              <p className="text-gray-400">
                Profesional konstruksi terpercaya untuk semua kebutuhan bangunan Anda.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Jasa Konstruksi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Renovasi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Samarinda, Kaltim</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>081931987647</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400">
            <p>&copy; 2024 CV KAILI KAZAM. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}