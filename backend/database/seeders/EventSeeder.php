<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $events = [
            [
                'title' => 'Green Cleanup Day: Aksi Bersih Lingkungan',
                'description' => 'Mari bersama-sama menjaga kebersihan lingkungan di sekitar area kota dengan bergabung dalam Green Cleanup Day. 
                Kegiatan ini akan dilaksanakan pada tanggal 5 Juni 2024 di Lapangan Hijau Sentral, dimulai pukul 08.00. 
                </br>
                Ini adalah momen penting bagi kita semua untuk berkontribusi dalam menjaga kebersihan dan keindahan lingkungan kita. 
                Dengan menjalankan tindakan bersih-bersih, kita tidak hanya membersihkan area sekitar dari sampah-sampah yang mengganggu, tetapi juga meningkatkan kesadaran akan pentingnya menjaga kebersihan lingkungan. 
                </br>
                Kegiatan ini juga merupakan kesempatan untuk membangun solidaritas dan kebersamaan di antara anggota masyarakat yang peduli terhadap lingkungan. 
                Dengan bergotong royong, kita dapat menciptakan lingkungan yang lebih bersih, sehat, dan nyaman untuk kita semua.',
                'image' => 'event1.jpg',
                'quota' => 100,
                'start_date' => now(),
                'end_date' => now()->addDays(20),

                'longitude' => "1232.123",
                'latitude' => "1232.123",

                'reward_points' => 100,
                'participants' => 10,
                'category' => json_encode(['category1', 'category2']),
            ],
            [
                'title' => 'Eco-Friendly Lifestyle Fair: Pameran Gaya Hidup Ramah Lingkungan',
                'description' => 'Acara ini akan dilaksanakan pada tanggal 25 Februari 2025 di Plaza Hijau Kota, dimulai pukul 10.00. 
                Di sini, Anda akan memiliki kesempatan unik untuk menemukan beragam produk-produk dan layanan-layanan ramah lingkungan yang dirancang untuk membantu Anda mengurangi jejak ekologis Anda dalam kehidupan sehari-hari. 
                Dari produk-produk ramah lingkungan seperti alat-alat dapur yang terbuat dari bahan daur ulang, hingga pilihan transportasi yang berkelanjutan seperti sepeda listrik dan mobil hybrid, 
                
                </br>
                Anda akan menemukan berbagai solusi yang dapat membantu Anda menjalani gaya hidup yang lebih ramah lingkungan.
                Selain itu, di pameran ini Anda juga akan memiliki kesempatan untuk mempelajari lebih lanjut tentang cara hidup yang berkelanjutan melalui berbagai workshop, seminar, dan diskusi yang akan diadakan selama acara berlangsung. 
                Para ahli lingkungan akan berbagi pengetahuan dan tips praktis tentang bagaimana Anda dapat mengurangi konsumsi energi, mengelola limbah dengan bijak, serta mendukung praktik pertanian dan perikanan berkelanjutan.
                Jadi, jangan lewatkan kesempatan ini untuk menjadi bagian dari perubahan menuju masa depan yang lebih hijau dan berkelanjutan. Ayo, bergabunglah dalam Eco-Friendly Lifestyle Fair dan temukan langkah-langkah konkret yang dapat Anda ambil untuk menjaga bumi kita tetap indah untuk generasi mendatang!',
                'image' => 'event1.jpg',
                'quota' => 100,
                'start_date' => now(),
                'end_date' => now()->addDays(20),

                'longitude' => "1232.123",
                'latitude' => "1232.123",

                'reward_points' => 100,
                'participants' => 10,
                'category' => json_encode(['category1', 'category2']),
            ],
        ];

        foreach ($events as $event) {
            \App\Models\Events::create($event);
        }
    }
}
