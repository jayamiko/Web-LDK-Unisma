import React from "react";
import {materialsAbout} from "../../dummydata";

function AboutContent() {
  return (
    <main className="mt-20 container mx-auto text-sky-800 px-4 sm:px-0">
      <h1 className="text-4xl font-titan">Tentang UKM LDK Al Ukhuwah</h1>
      <i className="font-medium text-2xl mt-2">Universitas Islam '45 Bekasi</i>
      <br />
      <br />
      <br />
      <br />

      <div className="flex h-full flex-col justify-center text-black">
        <article>
          {materialsAbout.map((content: string, index) => {
            return (
              <>
                <div
                  className="flex items-center justify-between text-black"
                  key={index}
                >
                  <h1 className="text-2xl text-sky-800 uppercase font-bold">
                    {content.title}
                  </h1>
                </div>
                <div
                  id={content.id}
                  className="py-2 text-black text-base sm:text-lg leading-6"
                >
                  <br />
                  {content.p1 && <p>{content.p1}</p>}
                  <br />
                  {content.p2 && <p>{content.p2}</p>}
                  <br />
                  {content.p3 && <p>{content.p3}</p>}
                  <br />
                  {content.p4 && <p>{content.p4}</p>}
                  <br />
                  <br />
                </div>
              </>
            );
          })}
          {/* VISI MISI */}
          <>
            <div className="flex items-center justify-between text-black">
              <h1 className="text-2xl text-sky-800 uppercase font-bold">
                C. Visi dan Misi
              </h1>
            </div>
            <div
              id="material-3"
              className="py-2 text-black text-base sm:text-lg leading-6"
            >
              <br />
              <h2 className="font-bold text-xl">Visi</h2>
              <br />
              <p>
                Lembaga Dakwah Kampus memiliki visi "Mewujudkan Komunitas Kampus
                Islami".
              </p>
              <br />
              <h2 className="font-bold text-xl">Misi</h2>
              <br />
              <ul className="list-outside">
                <li>
                  <label>1. </label>
                  Berpegang Teguh pada Al-Qur'an dan As Sunnah dalam mencetak
                  kader-kadernya sebagai Anashir At Taghylr (Agen Perubahan)
                  yang kreatif dan inovatif
                </li>
                <li>
                  <label>2. </label>
                  Membangun kesadaran seluruh anggota dan sivitas akademika akan
                  pentingnya penerapan nilai-nilai Islam dalam kehidupan kampus
                  demi menopang peningkatan kualitas akademik.
                </li>
                <li>
                  <label>3. </label>
                  Menjalin Ukhuwah Islamiah dan kerjasama dalam seluruh lini
                  kehidupan intra dan ekstra kampus serta berperan aktif dan
                  kreatif di dalamnya.
                </li>
                <li>
                  <label>4. </label>
                  Melakukan amar ma’ruf nahi munkar serta membangun opini publik
                  yang islami secara kontinu dan konsisten.
                </li>
                <li>
                  <label>5. </label>
                  Menjadi mediator dan advokator (amal khidami) bagi pemenuhan
                  kebutuhan akademik mahasiswa.
                </li>
                <li>
                  <label>6. </label>
                  Membangun jaringan komunikasi efektif dengan LDK lainnya,
                  khususnya wilayah bekasi dan nasional pada umumnya.
                </li>
              </ul>
              <br />
              <br />
            </div>
          </>

          {/* NILAI ORGANISASI */}
          <>
            <div className="flex items-center justify-between text-black">
              <h1 className="text-2xl text-sky-800 uppercase font-bold">
                D. Nilai-Nilai Organisasi
              </h1>
            </div>
            <div
              id="material-4"
              className="py-2 text-black text-base sm:text-lg leading-6"
            >
              <br />
              <ul>
                <li id="islami">
                  <h2 className="font-bold text-xl">1. Islami</h2>
                  <br />
                  <p>
                    LDK Al-Ukhuwah senantiasa menjunjung tinggi nilai-nilai
                    Islami sebagai dasar ideologinya Nilai-nilai keislaman harus
                    direpresentasikan dalam perilaku setiap anggotanya, karena
                    mereka memiliki kesadaran, dorongan, dan tanggung jawab
                    untuk berperilaku sesuai ajaran agama Islam. LDK Al-Ukhuwah
                    berupaya untuk menunjukkan keindahan cahaya islam melalui
                    perilaku para anggotanya.
                  </p>
                </li>
                <br />

                <li id="nasionalisme">
                  <h2 className="font-bold text-xl">2. Nasionalisme</h2>
                  <br />
                  <p>
                    Cinta pada tanah air merupakan rasa yang terus ditanamkan
                    dalam diri anggota LDK Al-Ukhuwah. Kesadaran untuk membela
                    negara dan mengharumkan nama bangsa selalu melekat dalam
                    jiwa kader LDK Al-Ukhuwah.
                  </p>
                </li>
                <br />

                <li id="persaudaraan">
                  <h2 className="font-bold text-xl">3. Persaudaraan</h2>
                  <br />
                  <p>
                    Nilai-nilai persaudaraan menjadi landasan aktivitas sosial
                    organisasi. Nilai itu menjadi pedoman bagi para anggota
                    dalam berinteraksi. Masing-masing anggota tidak menganggap
                    yang lainnya sekedar sebagai anggota formal, namun lebih
                    dari itu, seperti saudara sendiri. Dengan rasa persaudaraan,
                    aktivitas dan suasana organisasi menjadi bersifat
                    kekeluargaan, saling menghormati dan menghargai.
                  </p>
                </li>
                <br />

                <li id="militansi">
                  <h2 className="font-bold text-xl">4. Militansi</h2>
                  <br />
                  <p>
                    Dalam bekerja menjalankan tugas dan program organisasi,
                    militansi terus ditanamkan dalam diri anggotanya. Para
                    anggota bekerja dengan penuh tanggung jawab, ikhlas, terbuka
                    dan bergotong-royong.
                  </p>
                </li>
                <br />
                <li id="akademis">
                  <h2 className="font-bold text-xl">5. Akademis</h2>
                  <br />
                  <p>
                    Nilai lainya yang ditanamkan kepada anggota LDK Al-Ukhuwah
                    adalah nilai-nilai akademisi sebagai serorang mahasiswa
                    seperti keuletan, rajin, dan aktif berdiskusi.
                  </p>
                </li>
              </ul>
              <br />
              <br />
            </div>
          </>

          {/* PROGRAM UNGGULAN */}
          <>
            <div className="flex items-center justify-between text-black">
              <h1 className="text-2xl text-sky-800 uppercase font-bold">
                E. Program Unggulan
              </h1>
            </div>
            <div
              id="material-5"
              className="py-2 text-black text-base sm:text-lg leading-6"
            >
              <br />
              <ul>
                <li id="dauroh">
                  <label>1. DAUROH</label>
                </li>
                <li id="training">
                  <label>2. Training Manajemen Organisasi</label>
                </li>
                <li id="urkais">
                  <label>3. URKAIS (Urgensi Kajian Islam)</label>
                </li>
                <li id="diantar">
                  <label>4. DIANTAR (Dialog Antar Kita)</label>
                </li>
                <li id="mabit">
                  <label>5. Mabit (Malam Bina Iman dan Taqwa)</label>
                </li>
                <li id="ramadhan">
                  <label>6. Ramadhan Smile in Campus</label>
                </li>
                <li id="mabit">
                  <label>7. BOM (Bursa Obrolan Muslimah)</label>
                </li>
              </ul>
              <br />
              <br />
            </div>
          </>
        </article>
      </div>
    </main>
  );
}

export default AboutContent;
