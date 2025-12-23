import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Database, Users, Lock } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container py-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Beranda
          </Link>
          <div className="flex items-center space-x-4">
            <img 
              src="/logo-kaili-kazam.png" 
              alt="CV KAILI KAZAM Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Kebijakan Privasi</h1>
              <p className="text-gray-600">CV KAILI KAZAM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-orange-600" />
                <CardTitle className="text-2xl">Kebijakan Privasi CV KAILI KAZAM</CardTitle>
              </div>
              <p className="text-gray-600">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Pendahuluan</h2>
                <p className="text-gray-700 leading-relaxed">
                  CV KAILI KAZAM ("kami", "perusahaan") berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi yang Anda berikan kepada kami melalui website, layanan, atau interaksi lainnya dengan perusahaan kami.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">2. Informasi yang Kami Kumpulkan</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">Informasi Pribadi</h3>
                      <p className="text-gray-700">
                        Nama, alamat email, nomor telepon, alamat fisik, dan informasi kontak lainnya yang Anda berikan secara sukarela.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Database className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">Informasi Bisnis</h3>
                      <p className="text-gray-700">
                        Nama perusahaan, jabatan, detail proyek, dan informasi terkait layanan konstruksi yang Anda butuhkan.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Eye className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">Informasi Penggunaan</h3>
                      <p className="text-gray-700">
                        Data tentang bagaimana Anda menggunakan website kami, termasuk alamat IP, browser, dan waktu akses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Penggunaan Informasi</h2>
                <p className="text-gray-700 mb-4">
                  Kami menggunakan informasi yang kami kumpulkan untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Menyediakan layanan konstruksi dan konsultasi yang Anda minta</li>
                  <li>Merespons pertanyaan dan permintaan informasi</li>
                  <li>Mengirim penawaran harga dan proposal proyek</li>
                  <li>Meningkatkan kualitas layanan kami</li>
                  <li>Mengirim informasi tentang layanan dan promosi kami (dengan persetujuan Anda)</li>
                  <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Perlindungan Data</h2>
                <div className="flex items-start space-x-3">
                  <Lock className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">
                      Kami melindungi data pribadi Anda dengan:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2 ml-4">
                      <li>Enkripsi data saat transmisi dan penyimpanan</li>
                      <li>Akses terbatas hanya untuk staf yang berwenang</li>
                      <li>Keamanan fisik dan digital untuk mencegah akses tidak sah</li>
                      <li>Backup data teratur untuk mencegah kehilangan informasi</li>
                      <li>Monitoring keamanan berkelanjutan</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">5. Berbagi Informasi</h2>
                <p className="text-gray-700 mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Dengan persetujuan eksplisit dari Anda</li>
                  <li>Untuk mitra bisnis yang membantu menyediakan layanan kami</li>
                  <li>Sesuai yang diwajibkan oleh hukum atau peraturan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">6. Hak Anda</h2>
                <p className="text-gray-700 mb-4">
                  Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                  <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
                  <li>Menghapus informasi pribadi Anda (dalam batas yang diizinkan)</li>
                  <li>Menolak pemasaran langsung dari kami</li>
                  <li>Meminta salinan data pribadi Anda</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">7. Kebijakan Cookie</h2>
                <p className="text-gray-700">
                  Website kami mungkin menggunakan cookie untuk meningkatkan pengalaman pengguna. Cookie adalah file kecil yang disimpan di browser Anda. 
                  Anda dapat mengatur browser untuk menolak cookie, namun ini dapat mempengaruhi fungsionalitas website.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">8. Perubahan Kebijakan</h2>
                <p className="text-gray-700">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan dipublikasikan di website ini dan 
                  berlaku efektif pada tanggal publikasi. Kami menyarankan Anda untuk meninjau kebijakan ini secara berkala.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">9. Kontak Kami</h2>
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin melaksanakan hak Anda, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">CV KAILI KAZAM</p>
                  <p className="text-gray-700">JL. ELANG NO. 41, Kel. Sungai Pinang Dalam</p>
                  <p className="text-gray-700">Kec. Sungai Pinang, Kota Samarinda</p>
                  <p className="text-gray-700">Prov. Kalimantan Timur 75117</p>
                  <p className="text-gray-700">Telepon: 081931987647</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}