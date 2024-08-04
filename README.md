# React Firebase App

Bu proje, React ve Firebase kullanarak oluşturulmuş bir görev yönetim uygulamasıdır. Projenin demosuna aşağıdaki linkten ulaşabilirsiniz:

[Demo: Taskify](https://taskify.tunaunal.com)

## Proje Hakkında

Bu proje, basit bir görev yönetim uygulaması olarak tasarlanmıştır. Kullanıcılar kayıt olabilir, giriş yapabilir ve görevlerini yönetebilirler. Bu sürüm projenin ilk aşamasıdır ve ileride daha da geliştirilecektir.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzünü oluşturmak için.
- **Firebase**: Kimlik doğrulama ve veri depolama için.
- **Bootstrap**: Stil dosyaları için.

## Kurulum ve Kullanım

Projeyi kullanmak için aşağıdaki adımları izleyin:

1. **Depoyu Klonlayın**:
   ```bash  
   git clone https://github.com/TunaUnal/react-firebase-app.git
   cd react-firebase-app
   ```

2. **Paketleri Yükleyin**:
   
   ```npm install```
3. **Firebase API Anahtarlarını Alın**:

    - Firebase Console adresine gidin.
    - Yeni bir proje oluşturun veya mevcut bir projeyi kullanın.
    - Proje ayarlarına gidin ve web uygulaması ekleyin.
    - Firebase yapılandırma nesnesindeki bilgileri alın.
4. **Firebase Yapılandırmasını Ekleyin**:

    ``src/firebase/index.js`` dosyasını açın ve aşağıdaki gibi yapılandırın:

    ```bash
    const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
    } 
    ```
5. **Uygulamayı Başlartın**
    ```npm start```

6. **Projeyi GÖrüntüleyin**
    Uygulama yerel olarak [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.
