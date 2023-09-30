class StoreLocalization extends CustomElement {
    props = {
        countryCode: ""
    }
    allStores = [
        {
            "languageCode": "en",
            "countryCode": "AU",
            "storeName": "Emma Australia (AU)",
            "storeUrl": "https://www.emma-sleep.com.au/"
        },
        {
            "languageCode": "de",
            "countryCode": "AT",
            "storeName": "Emma Austria (AT)",
            "storeUrl": "https://www.emma-matratze.at/"
        },
        {
            "languageCode": "fr",
            "countryCode": "BE",
            "storeName": "Emma Belgium (FR)",
            "storeUrl": "https://www.emma-matelas.be/"
        },
        {
            "languageCode": "nl",
            "countryCode": "BE",
            "storeName": "Emma Belgium (NL)",
            "storeUrl": "https://www.emma-matras.be/"
        },
        {
            "languageCode": "pt",
            "countryCode": "BR",
            "storeName": "Emma Brazil (BR)",
            "storeUrl": "https://www.colchoesemma.com.br/"
        },
        {
            "languageCode": "en",
            "countryCode": "CA",
            "storeName": "Emma Canada (EN)",
            "storeUrl": "https://www.emma-sleep.ca/"
        },
        {
            "languageCode": "fr",
            "countryCode": "CA",
            "storeName": "Emma Canada (FR)",
            "storeUrl": "https://qc.emma-sleep.ca/"
        },
        {
            "languageCode": "es",
            "countryCode": "CL",
            "storeName": "Emma Chile (CL)",
            "storeUrl": "https://www.emma-colchon.cl/"
        },
        {
            "languageCode": "da",
            "countryCode": "DK",
            "storeName": "Emma Denmark (DK)",
            "storeUrl": "https://www.emma.dk/"
        },
        {
            "languageCode": "fr",
            "countryCode": "FR",
            "storeName": "Emma France (FR)",
            "storeUrl": "https://www.emma.fr/"
        },
        {
            "languageCode": "de",
            "countryCode": "DE",
            "storeName": "Emma Germany (DE)",
            "storeUrl": "https://www.emma-matratze.de/"
        },
        {
            "languageCode": "en",
            "countryCode": "HK",
            "storeName": "Emma Hong Kong SAR China (EN)",
            "storeUrl": "https://www.emma-mattress.hk/en/"
        },
        {
            "languageCode": "zh",
            "countryCode": "HK",
            "storeName": "Emma Hong Kong SAR China (簡体中文)",
            "storeUrl": "https://www.emma-mattress.hk/cn/"
        },
        {
            "languageCode": "zh",
            "countryCode": "HK",
            "storeName": "Emma Hong Kong SAR China (繁體中文)",
            "storeUrl": "https://www.emma-mattress.hk/zh/"
        },
        {
            "languageCode": "en",
            "countryCode": "IN",
            "storeName": "Emma India (IN)",
            "storeUrl": "https://www.emma-mattress.in/"
        },
        {
            "languageCode": "id",
            "countryCode": "ID",
            "storeName": "Emma Indonesia (ID)",
            "storeUrl": "https://www.emma-sleep.co.id/"
        },
        {
            "languageCode": "en",
            "countryCode": "IE",
            "storeName": "Emma Ireland (IE)",
            "storeUrl": "https://www.emma-sleep.ie/"
        },
        {
            "languageCode": "it",
            "countryCode": "IT",
            "storeName": "Emma Italy (IT)",
            "storeUrl": "https://www.emma-materasso.it/"
        },
        {
            "languageCode": "en",
            "countryCode": "JP",
            "storeName": "Emma Japan (JP)",
            "storeUrl": "https://www.emma-sleep.jp/"
        },
        {
            "languageCode": "en",
            "countryCode": "MY",
            "storeName": "Emma Malaysia (MY)",
            "storeUrl": "https://www.emma-sleep.com.my/"
        },
        {
            "languageCode": "es",
            "countryCode": "MX",
            "storeName": "Emma Mexico (MX)",
            "storeUrl": "https://www.emma-colchon.com.mx/"
        },
        {
            "languageCode": "nl",
            "countryCode": "NL",
            "storeName": "Emma Netherlands (NL)",
            "storeUrl": "https://www.emma-sleep.nl/"
        },
        {
            "languageCode": "en",
            "countryCode": "NZ",
            "storeName": "Emma New Zealand (NZ)",
            "storeUrl": "https://www.emma-sleep.co.nz/"
        },
        {
            "languageCode": "en",
            "countryCode": "PH",
            "storeName": "Emma Philippines (PH)",
            "storeUrl": "https://www.emma-sleep.com.ph/"
        },
        {
            "languageCode": "pl",
            "countryCode": "PL",
            "storeName": "Emma Poland (PL)",
            "storeUrl": "https://www.emma-materac.pl/"
        },
        {
            "languageCode": "pt",
            "countryCode": "PT",
            "storeName": "Emma Portugal (PT)",
            "storeUrl": "https://www.colchaoemma.pt/"
        },
        {
            "languageCode": "en",
            "countryCode": "SG",
            "storeName": "Emma Singapore (SG)",
            "storeUrl": "https://www.emma-sleep.com.sg/"
        },
        {
            "languageCode": "ko",
            "countryCode": "KR",
            "storeName": "Emma South Korea (KR)",
            "storeUrl": "https://www.emma-mattress.co.kr/"
        },
        {
            "languageCode": "es",
            "countryCode": "ES",
            "storeName": "Emma Spain (ES)",
            "storeUrl": "https://www.emma-colchon.es/"
        },
        {
            "languageCode": "sv",
            "countryCode": "SE",
            "storeName": "Emma Sweden (SE)",
            "storeUrl": "https://www.emma.se/"
        },
        {
            "languageCode": "de",
            "countryCode": "CH",
            "storeName": "Emma Switzerland (CH)",
            "storeUrl": "https://www.emma-matratze.ch/"
        },
        {
            "languageCode": "fr",
            "countryCode": "CH",
            "storeName": "Emma Switzerland (FR)",
            "storeUrl": "https://www.emma-matelas.ch/"
        },
        {
            "languageCode": "it",
            "countryCode": "CH",
            "storeName": "Emma Switzerland (IT)",
            "storeUrl": "https://www.emma-materasso.ch/"
        },
        {
            "languageCode": "en",
            "countryCode": "TW",
            "storeName": "Emma Taiwan (TW_EN)",
            "storeUrl": "https://www.emma-sleep.com.tw/en/"
        },
        {
            "languageCode": "zh",
            "countryCode": "TW",
            "storeName": "Emma Taiwan (TW_ZH)",
            "storeUrl": "https://www.emma-sleep.com.tw/"
        },
        {
            "languageCode": "th",
            "countryCode": "TH",
            "storeName": "Emma Thailand (TH)",
            "storeUrl": "https://www.emma.co.th/"
        },
        {
            "languageCode": "en",
            "countryCode": "GB",
            "storeName": "Emma U.K. (UK)",
            "storeUrl": "https://www.emma-sleep.co.uk/"
        },
        {
            "languageCode": "en",
            "countryCode": "US",
            "storeName": "Emma U.S. (US)",
            "storeUrl": "https://www.emma-sleep.com/"
        },
        {
            "languageCode": "en",
            "countryCode": "VN",
            "storeName": "Emma Vietnam (VN)",
            "storeUrl": "https://www.emma-sleep.vn/"
        }
    ]

    render() {
        this.innerHTML = `<div id="store-localization-popup">
        <div class="store-localization__wrapper">
          <div class="store-localization__sidebar">
            <svg width="83px" height="84px" viewBox="0 0 83 84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Pop-Up-country" transform="translate(-438.000000, -245.000000)" fill="#1E2B5A" fill-rule="nonzero">
                  <g id="Group-4" transform="translate(412.000000, 207.000000)">
                    <g id="Group" transform="translate(26.000000, 38.000000)">
                      <g id="sync-location">
                        <path d="M70.88808,40.0578333 C69.8434354,39.4855831 68.5850638,39.5373347 67.5869816,40.1935937 C66.5888995,40.8498528 66.0027392,42.0109179 66.0493016,43.2394271 C66.0958641,44.4679363 66.7680754,45.5772499 67.81272,46.1495 C72.97272,48.9875 75.9552,52.5099167 75.9552,55.8245 C75.9552,62.34975 65.12608,68.7245 50.76408,70.6595 C49.0385684,70.892985 47.7829925,72.48106 47.8937928,74.2898909 C48.0045932,76.0987219 49.4437536,77.5076881 51.18376,77.5108333 C51.32136,77.5108333 51.46928,77.5108333 51.61032,77.48575 C70.12096,74.9774167 82.57032,66.2878333 82.57032,55.8245 C82.56,49.7758333 78.432,44.1786667 70.88808,40.0578333 Z" id="Shape"></path>
                        <path d="M35.84136,66.6354167 C35.3687274,66.1442818 34.6586824,65.9979296 34.0421067,66.2645603 C33.425531,66.5311911 33.0237524,67.1583379 33.024,67.85375 L33.024,70.1936667 C33.024,70.8135833 32.60776,70.7741667 32.40136,70.7490833 C16.36064,68.7603333 6.60136,61.7549167 6.60136,55.81375 C6.60136,52.50275 9.57008,48.9803333 14.74384,46.13875 C15.7884846,45.5664998 16.4606958,44.4571863 16.5072583,43.2286771 C16.5538207,42.000168 15.9676604,40.8391028 14.9695783,40.1828438 C13.9714961,39.5265848 12.7131246,39.4748332 11.66848,40.0470833 C4.1452,44.1786667 0,49.7758333 0,55.81375 C0,66.56375 13.33,75.4360833 32.20872,77.6398333 C32.6658351,77.6591213 33.0262271,78.0519536 33.024,78.5285 L33.024,81.61375 C33.0258172,82.3123514 33.4339275,82.9401043 34.056,83.2011667 C34.6766763,83.2734829 35.3038378,83.1485703 35.85512,82.8428333 L42.45992,75.9628333 C42.7706132,75.6407137 42.9452819,75.202913 42.9452819,74.7462917 C42.9452819,74.2896703 42.7706132,73.8518696 42.45992,73.52975 L35.84136,66.6354167 Z" id="Shape"></path>
                        <path d="M41.28,0.791666667 C29.4303777,0.805490133 19.8276705,10.8083101 19.8144,23.1516667 C19.8144,33.0309167 32.98616,52.37375 38.65184,60.232 C39.2697332,61.0977609 40.2443505,61.6080505 41.28,61.6080505 C42.3156495,61.6080505 43.2902668,61.0977609 43.90816,60.232 C49.57384,52.3558333 62.7456,33.013 62.7456,23.13375 C62.7228581,10.7973909 53.1229192,0.805467304 41.28,0.791666667 Z M41.28,31.7516667 C36.7203371,31.7516667 33.024,27.9013155 33.024,23.1516667 C33.024,18.4020178 36.7203371,14.5516667 41.28,14.5516667 C45.8396629,14.5516667 49.536,18.4020178 49.536,23.1516667 C49.5265147,27.8943171 45.8329543,31.7337603 41.28,31.73375 L41.28,31.7516667 Z" id="Shape"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="change-country">
            <p class="from-abroad">It seems you are visiting Emma from abroad.</p>

            <p class="change-country__dropdown-label">You can choose your country from the list below:</p>
            <select class="change-country__dropdown">
              <option value="">Select your country</option>
            </select>
            <div class="keep-me-container">
              <a class="keep-me">Keep me on this site</a>
            </div>
          </div>
        </div>
        
        <div class="close-modal cursor-pointer">x</div>
      </div>`
    }

    mounted() {
        super.mounted();

        this.renderQuickRedirectElement()

        this.checkCountryAvailability();

        this.renderStoreOptions();

        this.showPopup();

        $('#store-localization-popup .keep-me-container, #store-localization-popup .close-modal').click(this.closePopup)
    }

   async showPopup() {
       $("#store-localization-popup").modal({
           fadeDuration: 100,
           modalClass: "",
           showClose: false
       })
   }

    closePopup() {
        $.modal.close();
    }

    renderStoreOptions() {
        const $countryDropdown = $('.change-country__dropdown');

        this.allStores.forEach(store => {
            const opt = document.createElement('option');
            opt.value = store.storeUrl;
            opt.text = store.storeName;
            opt.dataset.languageCode = store.languageCode;
            opt.dataset.countryCode = store.countryCode;

            $countryDropdown.append(opt)
        })


        $countryDropdown.change(this.redirectToOtherStore)
    }

    redirectToOtherStore = () => {
        const $countryDropdown = $('.change-country__dropdown');

        const $selectedOption = $countryDropdown.find('option:selected');

        const url = $selectedOption.val();

        const store = this.allStores.find(({ storeUrl }) => storeUrl === url);

        this.changeRedirectButton(store)
    }

    checkCountryAvailability() {
        const { countryCode: targetCountryCode } = this.props

        const allStoreCountryCodes = this.allStores.map(({ countryCode }) => countryCode);

        if (allStoreCountryCodes.includes(targetCountryCode)) {
            const selectCountryTextEl = document.querySelector('#store-localization-popup .change-country__dropdown-label')

            selectCountryTextEl.textContent = `Alternatively you can choose your country from the list below:`;

            const store = this.allStores.find(({ countryCode }) => countryCode === targetCountryCode);

            this.changeRedirectButton(store)
        }
    }

    renderQuickRedirectElement() {
        const changeCountryEl = document.querySelector('#store-localization-popup .change-country');
        const el = document.createElement('div');
        el.classList.add('quick-redirect')
        el.innerHTML = `<a class="redirect-button"></a>`;

        changeCountryEl.firstElementChild.insertAdjacentElement('afterend', el)
    }

    changeRedirectButton(store) {
        if (!store) return

        const redirectBtnEl = document.querySelector('#store-localization-popup .change-country .redirect-button')

        redirectBtnEl.href = store.storeUrl
        redirectBtnEl.text = `Go to ${store.storeName}`
    }
}

customElements.define('store-localization', StoreLocalization);

