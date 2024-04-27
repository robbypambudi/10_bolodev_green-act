<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CampaignSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $campaigns = [
            [
                'title' => 'Save Our Seas: Aksi Pembersihan Pantai',
                'description' => 'Pantai Indah membutuhkan bantuan kita dalam menyelamatkan lingkungan laut! Mari bersama-sama membersihkan pantai dari sampah plastik dan limbah lainnya pada tanggal 15 Juli 2024. 
                Acara ini akan berlangsung di Pantai Indah, dimulai pukul 09.00. Melalui kegiatan ini, kita dapat berperan aktif dalam melindungi ekosistem laut dan mempertahankan keindahan pantai kita. 
                </br>
                Dengan membersihkan pantai dari sampah-sampah yang mencemari, kita dapat mencegah kerusakan lingkungan dan melindungi kehidupan laut yang beragam. 
                Selain itu, kegiatan ini juga memberikan kesempatan bagi kita untuk belajar lebih banyak tentang pentingnya menjaga kebersihan lingkungan pantai dan dampak positif yang dapat kita ciptakan melalui tindakan bersih-bersih yang sederhana namun berdampak besar.',
                'image' => 'campaign1.jpg',
                'expiry_date' => now()->addDays(60),
                'reward_points' => 80,
                'participants' => 1000,
                'category' => json_encode(['category3', 'category6']),
                'user_id' => 1,
            ],
            [
                'title' => 'Riverside Revival: Penanaman Mangrove di Tepi Sungai',
                'description' => 'Campaign 2 description',
                'image' => 'campaign2.jpg',
                'expiry_date' => now()->addDays(60),
                'reward_points' => 200,
                'participants' => 20,
                'category' => json_encode(['category2', 'category3']),
                'user_id' => 1,
            ],
            [
                'title' => '',
                'description' => 'Sungai Hijau adalah salah satu aset lingkungan yang membutuhkan perlindungan. 
                Pada tanggal 25 Agustus 2024, mari bersama-sama beraksi menanam mangrove di tepi sungai untuk memelihara ekosistem air tawar. 
                 </br>
                Acara ini akan dimulai pukul 10.00. Penanaman mangrove adalah langkah penting dalam menjaga kestabilan sungai dan melindungi lingkungan sekitarnya dari bencana alam seperti banjir dan erosi. 
                Dengan menghadirkan vegetasi mangrove, kita dapat membantu menyaring polusi air, menyediakan habitat bagi berbagai jenis fauna, dan menjaga keberlangsungan hidup ekosistem sungai. Melalui kegiatan ini,
                kita dapat memberikan kontribusi positif dalam pelestarian lingkungan dan menciptakan lingkungan yang lebih seimbang dan lestari bagi kita semua.',
                'image' => 'campaign3.jpg',
                'expiry_date' => now()->addDays(40),
                'reward_points' => 300,
                'participants' => 30,
                'category' => json_encode(['category1', 'category3']),
                'user_id' => 1,
            ],
            [
                'title' => 'Clean Energy Expo: Pameran Energi Bersih dan Ramah Lingkungan',
                'description' => 'Jangan lewatkan kesempatan untuk hadir dalam Clean Energy Expo di Pusat Konvensi Energi Hijau pada tanggal 25 November 2024, dimulai pukul 10.00. 
                Acara ini akan menjadi ajang untuk mempelajari lebih lanjut tentang teknologi energi bersih yang ramah lingkungan serta cara mengurangi jejak karbon.
                Dengan menghadiri pameran ini, Anda akan memiliki kesempatan untuk mengeksplorasi inovasi terbaru dalam bidang energi terbarukan, seperti panel surya, turbin angin, dan energi hidrokinetik. 
                </br>
                Para ahli akan memberikan wawasan mendalam tentang potensi energi terbarukan untuk menggantikan bahan bakar fosil dan mengurangi emisi gas rumah kaca.Selain itu, 
                pameran ini juga akan menampilkan berbagai proyek dan program pengurangan emisi karbon yang telah berhasil diimplementasikan di berbagai negara. 
                Anda akan mendapatkan inspirasi untuk menerapkan praktik-praktik ramah lingkungan dalam kehidupan sehari-hari Anda dan berkontribusi dalam upaya global untuk mengatasi perubahan iklim.
                Mari bersama-sama bergerak menuju masa depan yang lebih berkelanjutan dengan memanfaatkan teknologi energi bersih dan mengambil tindakan konkrit untuk melindungi planet kita. 
                </br>

                Bersiaplah untuk merespon tantangan perubahan iklim dengan langkah-langkah positif dan solusi inovatif. 
                Ayo jadikan Clean Energy Expo sebagai langkah awal Anda dalam perjalanan menuju gaya hidup yang lebih ramah lingkungan dan berkelanjutan!',
                'image' => 'campaign3.jpg',
                'expiry_date' => now()->addDays(40),
                'reward_points' => 200,
                'participants' => 100,
                'category' => json_encode(['category3', 'category4']),
                'user_id' => 1,
            ],
            [
                'title' => 'Forest Guardians: Aksi Penanaman Pohon di Hutan Terdegradasi',
                'description' => 'Pada tanggal 5 September 2024, mari berpartisipasi dalam Forest Guardians: Aksi Penanaman Pohon di Hutan Terdegradasi di Hutan Lindung Sejati. 
                Kegiatan ini akan dimulai pukul 08.00, dan kami mengundang Anda untuk bergabung dalam aksi nyata untuk memulihkan ekosistem hutan yang terdegradasi. 
                </br>
                Penanaman pohon bukanlah sekadar aktivitas biasa, melainkan sebuah langkah konkret dalam mengatasi dampak deforestasi dan kerusakan lingkungan yang telah lama menghantui hutan-hutan kita.
                Penanaman pohon memiliki peran yang sangat penting dalam menjaga keberlanjutan lingkungan hidup kita. Seiring dengan menyerap karbon dioksida dari udara, pohon-pohon yang kita tanam akan membantu memperbaiki kualitas udara, 
                mengurangi pemanasan global, dan menciptakan lingkungan yang lebih sejuk dan nyaman bagi semua makhluk hidup. 
                </br>
                Selain itu, pohon-pohon baru ini juga akan menciptakan habitat yang lebih baik bagi berbagai spesies flora dan fauna yang menghuni hutan.
                Dengan bergabung dalam kegiatan ini, Anda tidak hanya berkontribusi dalam menjaga keberlanjutan lingkungan hidup kita, tetapi juga turut serta dalam membangun masa depan yang lebih hijau dan berkelanjutan bagi generasi mendatang. 
                Bersama-sama, mari kita jadikan Forest Guardians sebagai wujud nyata dari komitmen kita untuk melindungi alam dan menjaga keberlangsungan kehidupan di planet ini. Ayo, bergabunglah dengan ribuan pohon yang akan tumbuh menjadi hutan yang kokoh dan indah,
                menjadi saksi bisu dari perjuangan kita dalam menjaga bumi sebagai rumah bersama.',
                'image' => 'campaign3.jpg',
                'expiry_date' => now()->addDays(60),
                'reward_points' => 150,
                'participants' => 80,
                'category' => json_encode(['category3', 'category4']),
                'user_id' => 1,
            ],
            [
                'title' => 'Forest Guardians: Aksi Penanaman Pohon di Hutan Terdegradasi',
                'description' => 'Pada tanggal 5 September 2024, mari berpartisipasi dalam Forest Guardians: Aksi Penanaman Pohon di Hutan Terdegradasi di Hutan Lindung Sejati. 
                Kegiatan ini akan dimulai pukul 08.00, dan kami mengundang Anda untuk bergabung dalam aksi nyata untuk memulihkan ekosistem hutan yang terdegradasi. 
                </br>
                Penanaman pohon bukanlah sekadar aktivitas biasa, melainkan sebuah langkah konkret dalam mengatasi dampak deforestasi dan kerusakan lingkungan yang telah lama menghantui hutan-hutan kita.
                Penanaman pohon memiliki peran yang sangat penting dalam menjaga keberlanjutan lingkungan hidup kita. Seiring dengan menyerap karbon dioksida dari udara, pohon-pohon yang kita tanam akan membantu memperbaiki kualitas udara, 
                mengurangi pemanasan global, dan menciptakan lingkungan yang lebih sejuk dan nyaman bagi semua makhluk hidup. 
                </br>
                Selain itu, pohon-pohon baru ini juga akan menciptakan habitat yang lebih baik bagi berbagai spesies flora dan fauna yang menghuni hutan.
                Dengan bergabung dalam kegiatan ini, Anda tidak hanya berkontribusi dalam menjaga keberlanjutan lingkungan hidup kita, tetapi juga turut serta dalam membangun masa depan yang lebih hijau dan berkelanjutan bagi generasi mendatang. 
                Bersama-sama, mari kita jadikan Forest Guardians sebagai wujud nyata dari komitmen kita untuk melindungi alam dan menjaga keberlangsungan kehidupan di planet ini. Ayo, bergabunglah dengan ribuan pohon yang akan tumbuh menjadi hutan yang kokoh dan indah,
                menjadi saksi bisu dari perjuangan kita dalam menjaga bumi sebagai rumah bersama.',
                'image' => 'campaign3.jpg',
                'expiry_date' => now()->addDays(60),
                'reward_points' => 150,
                'participants' => 80,
                'category' => json_encode(['category3', 'category4']),
                'user_id' => 1,
            ],
        ];

        foreach ($campaigns as $campaign) {
            \App\Models\Campaigns::create($campaign);
        }
    }
}
