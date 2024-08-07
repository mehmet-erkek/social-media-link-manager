
# Proje: Sosyal Medya Yönetim Uygulaması

Bu proje, Rast Mobile Bilgi Teknolojileri Ltd. Şti Angular Task için geliştirilmiş bir Angular uygulamasıdır. Uygulamayı geliştirirken istenilen şartları adım adım tamamlamaya çaışarak ilerledim. Proje atomic yapıda ilerletmeye çalıştım. Bazı noktalarda atomic yapıdan çıkmış bulundum. Genel tasarımlar bittikten sonra guard resolver işlemlerine başlayarak diğer istekleri ve kriterleri yerine getirmeye çalıştım. Normalde responsive tasarım yapmam gerektiğini biliyorum fakat daha önce atomic yapıda çalışmamıştım responsive hale getirmek biraz kafa karışıklığı yarattı. Sürecin uzamaması ve hızlı bir şekilde size teslim etmek istedim. Sadece banner için minik bir responsivelik katmak istedim. Devextreme Primeng Bootstrap Tailwind gibi toollar kullanmak istemedim çünkü wordde esneklik belirtmemişsiniz.
Bu yüzden paket olarak anguların kendi material ini kullanmayı tercih ettim

Tabloyu görüntülemek için 
kullanıcı adı ve şifre : rastmobile  
girerek giriş yapabilirsiniz.
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
