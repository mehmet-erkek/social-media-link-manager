
# Proje: Sosyal Medya Yönetim Uygulaması

Bu proje, sosyal medya linklerini yönetmek için geliştirilmiş bir Angular uygulamasıdır. Uygulama, sosyal medya linklerini listeleme, ekleme, düzenleme ve silme işlemlerini gerçekleştirebilmektedir. Ayrıca, linklerin durumunu local storage'da saklayabilir ve uygulama yeniden yüklendiğinde bu verileri geri yükleyebilir.

---

## Kullanılan Teknolojiler

- **Angular**: Frontend framework
- **NgRx**: State management
- **Angular Material**: UI bileşenleri
- **NodeJS ve Express**: Backend server
- **MongoDB**: Veritabanı
- **Postman**: API testi

## Kurulum ve Çalıştırma

### Frontend

1. Proje dizinine gidin:
   ```sh
   cd social-media-link-manager
   ```

2. Gerekli bağımlılıkları yükleyin:
   ```sh
   npm install
   ```

3. Uygulamayı çalıştırın:
   ```sh
   ng serve
   ```

### Backend

1. Backend dizinine gidin:
   ```sh
   cd social-media-api
   ```

2. Gerekli bağımlılıkları yükleyin:
   ```sh
   npm install
   ```

3. Server'ı çalıştırın:
   ```sh
   node server.js
   ```

## Dosya ve Klasör Yapısı

- **src/app**: Angular bileşenleri, servisleri ve modülleri
- **src/assets**: Uygulama varlıkları (resimler, stil dosyaları vb.)
- **backend**: NodeJS ve Express kodları

## Özellikler ve Fonksiyonlar

- **Listeleme**: Sosyal medya linklerini tablo halinde listeler.
- **Ekleme**: Yeni sosyal medya linki ekler.
- **Düzenleme**: Mevcut sosyal medya linkini düzenler.
- **Silme**: Sosyal medya linkini siler.
- **Yerel Depolama**: Linklerin durumunu local storage'da saklar ve geri yükler.
- **Authentication Guard**: Kullanıcı giriş yapmadan linkleri göremez.
- **Resolver**: Link verilerini düzenleme sayfasına gitmeden önce yükler.
