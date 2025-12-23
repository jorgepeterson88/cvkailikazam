import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { ArrowLeft, FileText, Shield, Clock, AlertCircle, CheckCircle } from 'lucide-react'

export default function TermsPage() {
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
              <h1 className="text-2xl font-bold text-gray-900">Syarat & Ketentuan</h1>
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
                <FileText className="h-6 w-6 text-orange-600" />
                <CardTitle className="text-2xl">Syarat & Ketentuan Layanan CV KAILI KAZAM</CardTitle>
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
                <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Penerimaan Syarat</h2>
                <p className="text-gray-700 leading-relaxed">
                  Dengan mengakses atau menggunakan layanan CV KAILI KAZAM ("kami", "perusahaan"), Anda setuju untuk terikat 
                  oleh Syarat & Ketentuan ini. Jika Anda tidak setuju dengan syarat-syarat ini, jangan gunakan layanan kami.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">2. Definisi</h2>
                <div className="space-y-2 text-gray-700">
                  <p><strong>"Perusahaan"</strong> adalah CV KAILI KAZAM, perusahaan konstruksi yang berbasis di Samarinda, Kalimantan Timur.</p>
                  <p><strong>"Klien"</strong> adalah individu atau perusahaan yang menggunakan layanan konstruksi kami.</p>
                  <p><strong>"Layanan"</strong> mencakup semua jasa konstruksi, renovasi, dan konsultasi yang kami sediakan.</p>
                  <p><strong>"Proyek"</strong> adalah pekerjaan konstruksi atau renovasi yang disepakati antara Perusahaan dan Klien.</p>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Lingkup Layanan</h2>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 mb-3">
                      CV KAILI KAZAM menyediakan layanan:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Jasa konstruksi bangunan (rumah, gedung, struktur lainnya)</li>
                      <li>Renovasi dan perbaikan bangunan</li>
                      <li>Konsultasi perencanaan konstruksi</li>
                      <li>Supervisi dan manajemen proyek</li>
                      <li>Layanan terkait konstruksi lainnya sesuai kesepakatan</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Kewajiban Perusahaan</h2>
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 mb-3">
                      Perusahaan berkewajiban untuk:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Menyediakan layanan konstruksi dengan standar kualitas yang tinggi</li>
                      <li>Mengikuti spesifikasi dan kesepakatan kontrak</li>
                      <li>Memastikan keselamatan kerja sesuai regulasi yang berlaku</li>
                      <li>Menyelesaikan proyek sesuai timeline yang disepakati</li>
                      <li>Memberikan garansi untuk pekerjaan sesuai kesepakatan</li>
                      <li>Menggunakan material berkualitas sesuai spesifikasi</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">5. Kewajiban Klien</h2>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 mb-3">
                      Klien berkewajiban untuk:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Memberikan informasi yang akurat tentang kebutuhan proyek</li>
                      <li>Menyediakan akses ke lokasi proyek</li>
                      <li>Memastikan perizinan yang diperlukan tersedia</li>
                      <li>Melakukan pembayaran sesuai kesepakatan</li>
                      <li>Memberikan keputusan tepat waktu untuk persetujuan desain/material</li>
                      <li>Kooperatif selama pelaksanaan proyek</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">6. Pembayaran</h2>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Struktur Pembayaran:</strong></p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Uang muka (DP) minimum 30% dari total nilai kontrak</li>
                    <li>Pembayaran tahapan sesuai progress pekerjaan</li>
                    <li>Pelunasan setelah serah terima proyek</li>
                  </ul>
                  
                  <p className="mt-3"><strong>Metode Pembayaran:</strong></p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Transfer bank ke rekening perusahaan</li>
                    <li>Tunai dengan tanda terima resmi</li>
                  </ul>
                  
                  <p className="mt-3"><strong>Keterlambatan Pembayaran:</strong></p>
                  <p className="text-gray-700">
                    Keterlambatan pembayaran akan dikenakan bunga 2% per bulan dari jumlah yang terlambat.
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">7. Timeline & Penyelesaian</h2>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">
                      <strong>Estimasi Waktu:</strong> Timeline proyek akan ditentukan dalam kontrak dan dapat berubah 
                      jika ada perubahan scope pekerjaan atau faktor eksternal di luar kendali kami.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <strong>Force Majeure:</strong> Perusahaan tidak bertanggung jawab atas keterlambatan yang disebabkan 
                      oleh bencana alam, perubahan regulasi, atau faktor lain di luar kendali perusahaan.
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">8. Garansi & Layanan Purnajual</h2>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Garansi Struktur:</strong> Kami memberikan garansi untuk:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Struktur bangunan: 1 tahun</li>
                    <li>Kebocoran atap: 6 bulan</li>
                    <li>Pekerjaan finishing: 3 bulan</li>
                  </ul>
                  
                  <p className="mt-3"><strong>Layanan Purnajual:</strong></p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Inspeksi gratis 1 bulan setelah serah terima</li>
                    <li>Perbaikan kecil gratis dalam masa garansi</li>
                    <li>Konsultasi teknis gratis untuk pemeliharaan</li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">9. Pembatalan & Penghentian</h2>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Pembatalan oleh Klien:</strong></p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Jika dibatalkan sebelum pekerjaan dimulai: pengembalian DP dikurangi biaya administrasi 20%</li>
                    <li>Jika dibatalkan setelah pekerjaan dimulai: pembayaran sesuai progress pekerjaan</li>
                  </ul>
                  
                  <p className="mt-3"><strong>Penghentian oleh Perusahaan:</strong></p>
                  <p className="text-gray-700">
                    Perusahaan berhak menghentikan proyek jika: klien tidak memenuhi kewajiban pembayaran, 
                    ada gangguan keamanan, atau adanya pelanggaran kontrak.
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">10. Kekayaan Intelektual</h2>
                <p className="text-gray-700">
                  Desain, rencana kerja, dan dokumen teknis yang dibuat oleh perusahaan merupakan kekayaan intelektual 
                  CV KAILI KAZAM. Klien mendapatkan hak penggunaan untuk proyek yang disepakati, namun tidak dapat 
                  mendistribusikan atau menggunakan desain untuk proyek lain tanpa izin tertulis.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">11. Penyelesaian Sengketa</h2>
                <p className="text-gray-700 mb-3">
                  Sengketa yang timbul dari syarat & ketentuan ini akan diselesaikan melalui:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Musyawarah dan mufakat antara kedua belah pihak</li>
                  <li>Mediasi dengan pihak ketiga yang netral</li>
                  <li>Penyelesaian melalui pengadilan di Samarinda jika tidak tercapai kesepakatan</li>
                </ol>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">12. Perubahan Syarat & Ketentuan</h2>
                <p className="text-gray-700">
                  Perusahaan berhak mengubah syarat & ketentuan ini sewaktu-waktu. Perubahan akan 
                  diberitahukan kepada klien dan berlaku efektif setelah 7 hari pemberitahuan.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">13. Kontak Kami</h2>
                <p className="text-gray-700 mb-4">
                  Untuk pertanyaan atau klarifikasi tentang syarat & ketentuan ini, silakan hubungi:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">CV KAILI KAZAM</p>
                  <p className="text-gray-700">JL. ELANG NO. 41, Kel. Sungai Pinang Dalam</p>
                  <p className="text-gray-700">Kec. Sungai Pinang, Kota Samarinda</p>
                  <p className="text-gray-700">Prov. Kalimantan Timur 75117</p>
                  <p className="text-gray-700">Telepon: 081931987647</p>
                  <p className="text-gray-700">Email: info@kailikazam.com</p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-sm text-orange-800">
                  <strong>Catatan:</strong> Dengan menggunakan layanan CV KAILI KAZAM, Anda mengakui telah membaca, 
                  memahami, dan menyetujui Syarat & Ketentuan ini secara keseluruhan.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}