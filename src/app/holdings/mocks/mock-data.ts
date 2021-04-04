import { ApiResponse } from '../models/apiResponse';

export const mockData: ApiResponse = Object.freeze(
  {
    result: true,
    type: 'latest',
    configuration: {
      _id: '605f0b649aea6ca5b1560e06',
      key: 'configuration',
      enabled: true,
      cronTime: '* * * * * *',
      symbols: [
        'BTCEUR',
        'ETHEUR',
        'ADAEUR',
        'XLMEUR',
        'BNBEUR',
        'XRPEUR',
        'DOTEUR',
        'BCHEUR',
        'LTCEUR',
        'LINKEUR',
        'UNIEUR',
        'DOGEEUR',
        'BTCUPUSDT',
        'XMRUSDT',
        'ANKRUSDT',
        'EOSEUR'
      ],
      supportFIATs: [
        'EUR',
        'USDT'
      ],
      candles: {
        interval: '1h',
        limit: 96
      },
      buy: {
        enabled: true,
        maxPurchaseAmount: 800,
        triggerPercentage: 1.025,
        stopPercentage: 1.012,
        limitPercentage: 1.0121
      },
      sell: {
        enabled: true,
        triggerPercentage: 1.08,
        stopPercentage: 0.99,
        limitPercentage: 0.989
      }
    },
    common: {
      configuration: {
        _id: '605f0b649aea6ca5b1560e06',
        key: 'configuration',
        enabled: true,
        cronTime: '* * * * * *',
        symbols: [
          'BTCEUR',
          'ETHEUR',
          'ADAEUR',
          'XLMEUR',
          'BNBEUR',
          'XRPEUR',
          'DOTEUR',
          'BCHEUR',
          'LTCEUR',
          'LINKEUR',
          'UNIEUR',
          'DOGEEUR',
          'BTCUPUSDT',
          'XMRUSDT',
          'ANKRUSDT',
          'EOSEUR'
        ],
        supportFIATs: [
          'EUR',
          'USDT'
        ],
        candles: {
          interval: '1h',
          limit: 96
        },
        buy: {
          enabled: true,
          maxPurchaseAmount: 800,
          triggerPercentage: 1.025,
          stopPercentage: 1.012,
          limitPercentage: 1.0121
        },
        sell: {
          enabled: true,
          triggerPercentage: 1.08,
          stopPercentage: 0.99,
          limitPercentage: 0.989
        }
      },
      accountInfo: {
        makerCommission: 10,
        takerCommission: 10,
        buyerCommission: 0,
        sellerCommission: 0,
        canTrade: true,
        canWithdraw: true,
        canDeposit: true,
        updateTime: 1617402453696,
        accountType: 'SPOT',
        balances: [
          {
            asset: 'USDT',
            free: '197.35559481',
            locked: '0.00000000'
          },
          {
            asset: 'LINK',
            free: '0.01400000',
            locked: '0.00000000'
          },
          {
            asset: 'XRP',
            free: '830.76000000',
            locked: '0.00000000'
          },
          {
            asset: 'ADA',
            free: '605.87229929',
            locked: '0.00000000'
          },
          {
            asset: 'XLM',
            free: '1.04580929',
            locked: '0.00000000'
          },
          {
            asset: 'DOGE',
            free: '6.70000000',
            locked: '0.00000000'
          },
          {
            asset: 'LDBNB',
            free: '0.28239580',
            locked: '0.00000000'
          },
          {
            asset: 'EUR',
            free: '1838.22771627',
            locked: '0.00000000'
          },
          {
            asset: 'LDBTC',
            free: '0.00530489',
            locked: '0.00000000'
          },
          {
            asset: 'LDBUSD',
            free: '22.33909886',
            locked: '0.00000000'
          },
          {
            asset: 'LDETH',
            free: '0.02085822',
            locked: '0.00000000'
          },
          {
            asset: 'BTCUP',
            free: '0.20979000',
            locked: '0.00000000'
          },
          {
            asset: 'UNI',
            free: '0.01300000',
            locked: '0.00000000'
          },
          {
            asset: 'LDDOT',
            free: '12.72713874',
            locked: '0.00000000'
          },
          {
            asset: 'ALICE',
            free: '0.29223526',
            locked: '0.00000000'
          }
        ],
        permissions: [
          'SPOT',
          'LEVERAGED'
        ]
      },
      exchangeSymbols: [
        'BTCUSDT',
        'ETHUSDT',
        'BNBUSDT',
        'BCCUSDT',
        'NEOUSDT',
        'LTCUSDT',
        'QTUMUSDT',
        'ADAUSDT',
        'XRPUSDT',
        'EOSUSDT',
        'TUSDUSDT',
        'IOTAUSDT',
        'XLMUSDT',
        'ONTUSDT',
        'TRXUSDT',
        'ETCUSDT',
        'ICXUSDT',
        'VENUSDT',
        'NULSUSDT',
        'VETUSDT',
        'PAXUSDT',
        'BCHABCUSDT',
        'BCHSVUSDT',
        'USDCUSDT',
        'LINKUSDT',
        'WAVESUSDT',
        'BTTUSDT',
        'USDSUSDT',
        'ONGUSDT',
        'HOTUSDT',
        'ZILUSDT',
        'ZRXUSDT',
        'FETUSDT',
        'BATUSDT',
        'XMRUSDT',
        'ZECUSDT',
        'IOSTUSDT',
        'CELRUSDT',
        'DASHUSDT',
        'NANOUSDT',
        'OMGUSDT',
        'THETAUSDT',
        'ENJUSDT',
        'MITHUSDT',
        'MATICUSDT',
        'ATOMUSDT',
        'TFUELUSDT',
        'ONEUSDT',
        'FTMUSDT',
        'ALGOUSDT',
        'USDSBUSDT',
        'GTOUSDT',
        'ERDUSDT',
        'DOGEUSDT',
        'DUSKUSDT',
        'ANKRUSDT',
        'WINUSDT',
        'COSUSDT',
        'NPXSUSDT',
        'COCOSUSDT',
        'MTLUSDT',
        'TOMOUSDT',
        'PERLUSDT',
        'DENTUSDT',
        'MFTUSDT',
        'KEYUSDT',
        'STORMUSDT',
        'DOCKUSDT',
        'WANUSDT',
        'FUNUSDT',
        'CVCUSDT',
        'CHZUSDT',
        'BANDUSDT',
        'BUSDUSDT',
        'BEAMUSDT',
        'XTZUSDT',
        'RENUSDT',
        'RVNUSDT',
        'HCUSDT',
        'HBARUSDT',
        'NKNUSDT',
        'STXUSDT',
        'KAVAUSDT',
        'ARPAUSDT',
        'IOTXUSDT',
        'RLCUSDT',
        'MCOUSDT',
        'CTXCUSDT',
        'BCHUSDT',
        'TROYUSDT',
        'VITEUSDT',
        'FTTUSDT',
        'BUSDTRY',
        'USDTTRY',
        'USDTRUB',
        'BTCEUR',
        'ETHEUR',
        'BNBEUR',
        'XRPEUR',
        'EURBUSD',
        'EURUSDT',
        'OGNUSDT',
        'DREPUSDT',
        'BULLUSDT',
        'BEARUSDT',
        'ETHBULLUSDT',
        'ETHBEARUSDT',
        'TCTUSDT',
        'WRXUSDT',
        'BTSUSDT',
        'LSKUSDT',
        'BNTUSDT',
        'LTOUSDT',
        'EOSBULLUSDT',
        'EOSBEARUSDT',
        'XRPBULLUSDT',
        'XRPBEARUSDT',
        'STRATUSDT',
        'AIONUSDT',
        'MBLUSDT',
        'COTIUSDT',
        'BNBBULLUSDT',
        'BNBBEARUSDT',
        'STPTUSDT',
        'USDTZAR',
        'WTCUSDT',
        'DATAUSDT',
        'XZCUSDT',
        'SOLUSDT',
        'USDTIDRT',
        'CTSIUSDT',
        'HIVEUSDT',
        'CHRUSDT',
        'BTCUPUSDT',
        'BTCDOWNUSDT',
        'GXSUSDT',
        'ARDRUSDT',
        'LENDUSDT',
        'MDTUSDT',
        'STMXUSDT',
        'KNCUSDT',
        'REPUSDT',
        'LRCUSDT',
        'PNTUSDT',
        'USDTUAH',
        'COMPUSDT',
        'USDTBIDR',
        'BKRWUSDT',
        'SCUSDT',
        'ZENUSDT',
        'SNXUSDT',
        'ETHUPUSDT',
        'ETHDOWNUSDT',
        'ADAUPUSDT',
        'ADADOWNUSDT',
        'LINKUPUSDT',
        'LINKDOWNUSDT',
        'VTHOUSDT',
        'DGBUSDT',
        'GBPUSDT',
        'SXPUSDT',
        'MKRUSDT',
        'DAIUSDT',
        'DCRUSDT',
        'STORJUSDT',
        'BNBUPUSDT',
        'BNBDOWNUSDT',
        'XTZUPUSDT',
        'XTZDOWNUSDT',
        'USDTBKRW',
        'MANAUSDT',
        'AUDUSDT',
        'YFIUSDT',
        'BALUSDT',
        'BLZUSDT',
        'IRISUSDT',
        'KMDUSDT',
        'USDTDAI',
        'JSTUSDT',
        'SRMUSDT',
        'ANTUSDT',
        'CRVUSDT',
        'SANDUSDT',
        'OCEANUSDT',
        'NMRUSDT',
        'DOTUSDT',
        'LUNAUSDT',
        'RSRUSDT',
        'PAXGUSDT',
        'WNXMUSDT',
        'TRBUSDT',
        'BZRXUSDT',
        'SUSHIUSDT',
        'YFIIUSDT',
        'KSMUSDT',
        'EGLDUSDT',
        'DIAUSDT',
        'RUNEUSDT',
        'FIOUSDT',
        'UMAUSDT',
        'EOSUPUSDT',
        'EOSDOWNUSDT',
        'TRXUPUSDT',
        'TRXDOWNUSDT',
        'XRPUPUSDT',
        'XRPDOWNUSDT',
        'DOTUPUSDT',
        'DOTDOWNUSDT',
        'USDTNGN',
        'BELUSDT',
        'WINGUSDT',
        'LTCUPUSDT',
        'LTCDOWNUSDT',
        'SXPEUR',
        'UNIUSDT',
        'NBSUSDT',
        'OXTUSDT',
        'SUNUSDT',
        'AVAXUSDT',
        'HNTUSDT',
        'FLMUSDT',
        'UNIUPUSDT',
        'UNIDOWNUSDT',
        'ORNUSDT',
        'UTKUSDT',
        'XVSUSDT',
        'ALPHAUSDT',
        'USDTBRL',
        'AAVEUSDT',
        'NEARUSDT',
        'SXPUPUSDT',
        'SXPDOWNUSDT',
        'FILUSDT',
        'FILUPUSDT',
        'FILDOWNUSDT',
        'YFIUPUSDT',
        'YFIDOWNUSDT',
        'INJUSDT',
        'LINKEUR',
        'AUDIOUSDT',
        'CTKUSDT',
        'BCHUPUSDT',
        'BCHDOWNUSDT',
        'DOTEUR',
        'AKROUSDT',
        'AXSUSDT',
        'HARDUSDT',
        'LTCEUR',
        'DNTUSDT',
        'ADAEUR',
        'STRAXUSDT',
        'UNFIUSDT',
        'ROSEUSDT',
        'AVAUSDT',
        'XEMUSDT',
        'AAVEUPUSDT',
        'AAVEDOWNUSDT',
        'SKLUSDT',
        'BCHEUR',
        'YFIEUR',
        'SUSDUSDT',
        'SUSHIUPUSDT',
        'SUSHIDOWNUSDT',
        'XLMUPUSDT',
        'XLMDOWNUSDT',
        'XLMEUR',
        'GRTUSDT',
        'JUVUSDT',
        'PSGUSDT',
        'USDTBVND',
        '1INCHUSDT',
        'REEFUSDT',
        'OGUSDT',
        'ATMUSDT',
        'ASRUSDT',
        'CELOUSDT',
        'RIFUSDT',
        'GRTEUR',
        'BTCSTUSDT',
        'TRUUSDT',
        'EOSEUR',
        'CKBUSDT',
        'TWTUSDT',
        'FIROUSDT',
        'DOGEEUR',
        'LITUSDT',
        'SFPUSDT',
        'DODOUSDT',
        'CAKEUSDT',
        'ACMUSDT',
        'BADGERUSDT',
        'FISUSDT',
        'EGLDEUR',
        'OMUSDT',
        'PONDUSDT',
        'DEGOUSDT',
        'AVAXEUR',
        'UNIEUR',
        'ALICEUSDT',
        'CHZEUR',
        'LINAUSDT',
        'ENJEUR',
        'MATICEUR',
        'PERPUSDT',
        'RAMPUSDT',
        'SUPERUSDT',
        'CFXUSDT',
        'LUNAEUR',
        'THETAEUR',
        'EPSUSDT',
        'AUTOUSDT'
      ]
    },
    stats: {
      symbols: [
        {
          globalConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          symbol: 'DOTEUR',
          symbolConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          accountInfo: {
            makerCommission: 10,
            takerCommission: 10,
            buyerCommission: 0,
            sellerCommission: 0,
            canTrade: true,
            canWithdraw: true,
            canDeposit: true,
            updateTime: 1617402453696,
            accountType: 'SPOT',
            balances: [
              {
                asset: 'USDT',
                free: '197.35559481',
                locked: '0.00000000'
              },
              {
                asset: 'LINK',
                free: '0.01400000',
                locked: '0.00000000'
              },
              {
                asset: 'XRP',
                free: '830.76000000',
                locked: '0.00000000'
              },
              {
                asset: 'ADA',
                free: '605.87229929',
                locked: '0.00000000'
              },
              {
                asset: 'XLM',
                free: '1.04580929',
                locked: '0.00000000'
              },
              {
                asset: 'DOGE',
                free: '6.70000000',
                locked: '0.00000000'
              },
              {
                asset: 'LDBNB',
                free: '0.28239580',
                locked: '0.00000000'
              },
              {
                asset: 'EUR',
                free: '1838.22771627',
                locked: '0.00000000'
              },
              {
                asset: 'LDBTC',
                free: '0.00530489',
                locked: '0.00000000'
              },
              {
                asset: 'LDBUSD',
                free: '22.33909886',
                locked: '0.00000000'
              },
              {
                asset: 'LDETH',
                free: '0.02085822',
                locked: '0.00000000'
              },
              {
                asset: 'BTCUP',
                free: '0.20979000',
                locked: '0.00000000'
              },
              {
                asset: 'UNI',
                free: '0.01300000',
                locked: '0.00000000'
              },
              {
                asset: 'LDDOT',
                free: '12.72713874',
                locked: '0.00000000'
              },
              {
                asset: 'ALICE',
                free: '0.29223526',
                locked: '0.00000000'
              }
            ],
            permissions: [
              'SPOT',
              'LEVERAGED'
            ]
          },
          refreshAccountInfo: false,
          indicators: {
            lowestPrice: 28.436,
            lastCandle: {
              openTime: 1617400800000,
              open: '33.76600000',
              high: '33.91800000',
              low: '33.50000000',
              close: '33.55200000',
              volume: '8686.67200000',
              closeTime: 1617404399999,
              quoteVolume: '292625.54395500',
              trades: 591,
              baseAssetVolume: '4055.07200000',
              quoteAssetVolume: '136526.99471800'
            }
          },
          symbolInfo: {
            symbol: 'DOTEUR',
            status: 'TRADING',
            baseAsset: 'DOT',
            baseAssetPrecision: 8,
            quoteAsset: 'EUR',
            quotePrecision: 8,
            filterLotSize: {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '90000.00000000',
              stepSize: '0.00100000'
            },
            filterPrice: {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00100000',
              maxPrice: '10000.00000000',
              tickSize: '0.00100000'
            },
            filterMinNotional: {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000',
              applyToMarket: true,
              avgPriceMins: 5
            }
          },
          openOrders: [],
          action: 'not-determined',
          baseAssetBalance: {
            asset: 'DOT',
            free: 0,
            locked: 0,
            total: 0,
            estimatedValue: 0,
            updatedAt: '2021-04-02T22:27:33.696Z'
          },
          quoteAssetBalance: {
            asset: 'EUR',
            free: '1838.22771627',
            locked: '0.00000000'
          },
          buy: {
            currentPrice: 33.552,
            limitPrice: 33.9579792,
            lowestPrice: 28.436,
            triggerPrice: 29.1469,
            difference: 15.113442595953597,
            openOrders: [],
            processMesage: '',
            updatedAt: '2021-04-02T22:58:54.307Z'
          },
          sell: {
            currentPrice: 33.552,
            limitPrice: 33.182928,
            lastBuyPrice: null,
            triggerPrice: null,
            difference: null,
            currentProfit: null,
            currentProfitPercentage: null,
            openOrders: [],
            processMessage: '',
            updatedAt: '2021-04-02T22:58:54.307Z'
          }
        },
        {
          globalConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          symbol: 'BCHEUR',
          symbolConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          accountInfo: {
            makerCommission: 10,
            takerCommission: 10,
            buyerCommission: 0,
            sellerCommission: 0,
            canTrade: true,
            canWithdraw: true,
            canDeposit: true,
            updateTime: 1617402453696,
            accountType: 'SPOT',
            balances: [
              {
                asset: 'USDT',
                free: '197.35559481',
                locked: '0.00000000'
              },
              {
                asset: 'LINK',
                free: '0.01400000',
                locked: '0.00000000'
              },
              {
                asset: 'XRP',
                free: '830.76000000',
                locked: '0.00000000'
              },
              {
                asset: 'ADA',
                free: '605.87229929',
                locked: '0.00000000'
              },
              {
                asset: 'XLM',
                free: '1.04580929',
                locked: '0.00000000'
              },
              {
                asset: 'DOGE',
                free: '6.70000000',
                locked: '0.00000000'
              },
              {
                asset: 'LDBNB',
                free: '0.28239580',
                locked: '0.00000000'
              },
              {
                asset: 'EUR',
                free: '1838.22771627',
                locked: '0.00000000'
              },
              {
                asset: 'LDBTC',
                free: '0.00530489',
                locked: '0.00000000'
              },
              {
                asset: 'LDBUSD',
                free: '22.33909886',
                locked: '0.00000000'
              },
              {
                asset: 'LDETH',
                free: '0.02085822',
                locked: '0.00000000'
              },
              {
                asset: 'BTCUP',
                free: '0.20979000',
                locked: '0.00000000'
              },
              {
                asset: 'UNI',
                free: '0.01300000',
                locked: '0.00000000'
              },
              {
                asset: 'LDDOT',
                free: '12.72713874',
                locked: '0.00000000'
              },
              {
                asset: 'ALICE',
                free: '0.29223526',
                locked: '0.00000000'
              }
            ],
            permissions: [
              'SPOT',
              'LEVERAGED'
            ]
          },
          refreshAccountInfo: false,
          indicators: {
            lowestPrice: 430.29,
            lastCandle: {
              openTime: 1617400800000,
              open: '497.68000000',
              high: '500.68000000',
              low: '494.25000000',
              close: '494.97000000',
              volume: '124.74713000',
              closeTime: 1617404399999,
              quoteVolume: '62088.74654280',
              trades: 198,
              baseAssetVolume: '57.58353000',
              quoteAssetVolume: '28713.50545510'
            }
          },
          symbolInfo: {
            symbol: 'BCHEUR',
            status: 'TRADING',
            baseAsset: 'BCH',
            baseAssetPrecision: 8,
            quoteAsset: 'EUR',
            quotePrecision: 8,
            filterLotSize: {
              filterType: 'LOT_SIZE',
              minQty: '0.00001000',
              maxQty: '90000.00000000',
              stepSize: '0.00001000'
            },
            filterPrice: {
              filterType: 'PRICE_FILTER',
              minPrice: '0.01000000',
              maxPrice: '100000.00000000',
              tickSize: '0.01000000'
            },
            filterMinNotional: {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000',
              applyToMarket: true,
              avgPriceMins: 5
            }
          },
          openOrders: [],
          action: 'not-determined',
          baseAssetBalance: {
            asset: 'BCH',
            free: 0,
            locked: 0,
            total: 0,
            estimatedValue: 0,
            updatedAt: '2021-04-02T22:27:33.696Z'
          },
          quoteAssetBalance: {
            asset: 'EUR',
            free: '1838.22771627',
            locked: '0.00000000'
          },
          buy: {
            currentPrice: 494.97,
            limitPrice: 500.95913700000006,
            lowestPrice: 430.29,
            triggerPrice: 441.04724999999996,
            difference: 12.226071016200656,
            openOrders: [],
            processMesage: '',
            updatedAt: '2021-04-02T22:58:56.283Z'
          },
          sell: {
            currentPrice: 494.97,
            limitPrice: 489.52533,
            lastBuyPrice: null,
            triggerPrice: null,
            difference: null,
            currentProfit: null,
            currentProfitPercentage: null,
            openOrders: [],
            processMessage: '',
            updatedAt: '2021-04-02T22:58:56.283Z'
          }
        },
        {
          globalConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          symbol: 'XLMEUR',
          symbolConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          accountInfo: {
            makerCommission: 10,
            takerCommission: 10,
            buyerCommission: 0,
            sellerCommission: 0,
            canTrade: true,
            canWithdraw: true,
            canDeposit: true,
            updateTime: 1617402453696,
            accountType: 'SPOT',
            balances: [
              {
                asset: 'USDT',
                free: '197.35559481',
                locked: '0.00000000'
              },
              {
                asset: 'LINK',
                free: '0.01400000',
                locked: '0.00000000'
              },
              {
                asset: 'XRP',
                free: '830.76000000',
                locked: '0.00000000'
              },
              {
                asset: 'ADA',
                free: '605.87229929',
                locked: '0.00000000'
              },
              {
                asset: 'XLM',
                free: '1.04580929',
                locked: '0.00000000',
                total: 1.04580929,
                updatedAt: '2021-04-02T22:27:33.696Z',
                estimatedValue: 0.38866456453560005
              },
              {
                asset: 'DOGE',
                free: '6.70000000',
                locked: '0.00000000'
              },
              {
                asset: 'LDBNB',
                free: '0.28239580',
                locked: '0.00000000'
              },
              {
                asset: 'EUR',
                free: '1838.22771627',
                locked: '0.00000000'
              },
              {
                asset: 'LDBTC',
                free: '0.00530489',
                locked: '0.00000000'
              },
              {
                asset: 'LDBUSD',
                free: '22.33909886',
                locked: '0.00000000'
              },
              {
                asset: 'LDETH',
                free: '0.02085822',
                locked: '0.00000000'
              },
              {
                asset: 'BTCUP',
                free: '0.20979000',
                locked: '0.00000000'
              },
              {
                asset: 'UNI',
                free: '0.01300000',
                locked: '0.00000000'
              },
              {
                asset: 'LDDOT',
                free: '12.72713874',
                locked: '0.00000000'
              },
              {
                asset: 'ALICE',
                free: '0.29223526',
                locked: '0.00000000'
              }
            ],
            permissions: [
              'SPOT',
              'LEVERAGED'
            ]
          },
          refreshAccountInfo: false,
          indicators: {
            lowestPrice: 0.32344,
            lastCandle: {
              openTime: 1617400800000,
              open: '0.37526000',
              high: '0.37822000',
              low: '0.37128000',
              close: '0.37164000',
              volume: '259929.40000000',
              closeTime: 1617404399999,
              quoteVolume: '97532.46766800',
              trades: 375,
              baseAssetVolume: '79899.20000000',
              quoteAssetVolume: '30044.62883100'
            }
          },
          symbolInfo: {
            symbol: 'XLMEUR',
            status: 'TRADING',
            baseAsset: 'XLM',
            baseAssetPrecision: 8,
            quoteAsset: 'EUR',
            quotePrecision: 8,
            filterLotSize: {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '9000000.00000000',
              stepSize: '0.10000000'
            },
            filterPrice: {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001000',
              maxPrice: '1000.00000000',
              tickSize: '0.00001000'
            },
            filterMinNotional: {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000',
              applyToMarket: true,
              avgPriceMins: 5
            }
          },
          openOrders: [],
          action: 'not-determined',
          baseAssetBalance: {
            asset: 'XLM',
            free: '1.04580929',
            locked: '0.00000000',
            total: 1.04580929,
            updatedAt: '2021-04-02T22:27:33.696Z',
            estimatedValue: 0.38866456453560005
          },
          quoteAssetBalance: {
            asset: 'EUR',
            free: '1838.22771627',
            locked: '0.00000000'
          },
          buy: {
            currentPrice: 0.37164,
            limitPrice: 0.376136844,
            lowestPrice: 0.32344,
            triggerPrice: 0.331526,
            difference: 12.099805143488007,
            openOrders: [],
            processMesage: '',
            updatedAt: '2021-04-02T22:58:48.292Z'
          },
          sell: {
            currentPrice: 0.37164,
            limitPrice: 0.36755196,
            lastBuyPrice: null,
            triggerPrice: null,
            difference: null,
            currentProfit: null,
            currentProfitPercentage: null,
            openOrders: [],
            processMessage: '',
            updatedAt: '2021-04-02T22:58:48.292Z'
          }
        },
        {
          globalConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          symbol: 'XMRUSDT',
          symbolConfiguration: {
            _id: '6066273fbc3d8996a4acf79d',
            key: 'XMRUSDT-configuration',
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 100,
              triggerPercentage: 1,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.06,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            },
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ]
          },
          accountInfo: {
            makerCommission: 10,
            takerCommission: 10,
            buyerCommission: 0,
            sellerCommission: 0,
            canTrade: true,
            canWithdraw: true,
            canDeposit: true,
            updateTime: 1617402453696,
            accountType: 'SPOT',
            balances: [
              {
                asset: 'USDT',
                free: '197.35559481',
                locked: '0.00000000'
              },
              {
                asset: 'LINK',
                free: '0.01400000',
                locked: '0.00000000'
              },
              {
                asset: 'XRP',
                free: '830.76000000',
                locked: '0.00000000'
              },
              {
                asset: 'ADA',
                free: '605.87229929',
                locked: '0.00000000'
              },
              {
                asset: 'XLM',
                free: '1.04580929',
                locked: '0.00000000'
              },
              {
                asset: 'DOGE',
                free: '6.70000000',
                locked: '0.00000000'
              },
              {
                asset: 'LDBNB',
                free: '0.28239580',
                locked: '0.00000000'
              },
              {
                asset: 'EUR',
                free: '1838.22771627',
                locked: '0.00000000'
              },
              {
                asset: 'LDBTC',
                free: '0.00530489',
                locked: '0.00000000'
              },
              {
                asset: 'LDBUSD',
                free: '22.33909886',
                locked: '0.00000000'
              },
              {
                asset: 'LDETH',
                free: '0.02085822',
                locked: '0.00000000'
              },
              {
                asset: 'BTCUP',
                free: '0.20979000',
                locked: '0.00000000'
              },
              {
                asset: 'UNI',
                free: '0.01300000',
                locked: '0.00000000'
              },
              {
                asset: 'LDDOT',
                free: '12.72713874',
                locked: '0.00000000'
              },
              {
                asset: 'ALICE',
                free: '0.29223526',
                locked: '0.00000000'
              }
            ],
            permissions: [
              'SPOT',
              'LEVERAGED'
            ]
          },
          refreshAccountInfo: false,
          indicators: {
            lowestPrice: 232.28,
            lastCandle: {
              openTime: 1617400800000,
              open: '255.55000000',
              high: '256.58000000',
              low: '255.03000000',
              close: '255.83000000',
              volume: '1258.08031000',
              closeTime: 1617404399999,
              quoteVolume: '321795.25593800',
              trades: 1327,
              baseAssetVolume: '629.01992000',
              quoteAssetVolume: '160876.85285670'
            }
          },
          symbolInfo: {
            symbol: 'XMRUSDT',
            status: 'TRADING',
            baseAsset: 'XMR',
            baseAssetPrecision: 8,
            quoteAsset: 'USDT',
            quotePrecision: 8,
            filterLotSize: {
              filterType: 'LOT_SIZE',
              minQty: '0.00001000',
              maxQty: '90000.00000000',
              stepSize: '0.00001000'
            },
            filterPrice: {
              filterType: 'PRICE_FILTER',
              minPrice: '0.01000000',
              maxPrice: '100000.00000000',
              tickSize: '0.01000000'
            },
            filterMinNotional: {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000',
              applyToMarket: true,
              avgPriceMins: 5
            }
          },
          openOrders: [],
          action: 'not-determined',
          baseAssetBalance: {
            asset: 'XMR',
            free: 0,
            locked: 0,
            total: 0,
            estimatedValue: 0,
            updatedAt: '2021-04-02T22:27:33.696Z'
          },
          quoteAssetBalance: {
            asset: 'USDT',
            free: '197.35559481',
            locked: '0.00000000'
          },
          buy: {
            currentPrice: 255.83,
            limitPrice: 258.925543,
            lowestPrice: 232.28,
            triggerPrice: 232.28,
            difference: 10.138625796452573,
            openOrders: [],
            processMesage: '',
            updatedAt: '2021-04-02T22:59:09.284Z'
          },
          sell: {
            currentPrice: 255.83,
            limitPrice: 253.01587,
            lastBuyPrice: null,
            triggerPrice: null,
            difference: null,
            currentProfit: null,
            currentProfitPercentage: null,
            openOrders: [],
            processMessage: '',
            updatedAt: '2021-04-02T22:59:09.284Z'
          }
        },
        {
          globalConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          symbol: 'UNIEUR',
          symbolConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          accountInfo: {
            makerCommission: 10,
            takerCommission: 10,
            buyerCommission: 0,
            sellerCommission: 0,
            canTrade: true,
            canWithdraw: true,
            canDeposit: true,
            updateTime: 1617402453696,
            accountType: 'SPOT',
            balances: [
              {
                asset: 'USDT',
                free: '197.35559481',
                locked: '0.00000000'
              },
              {
                asset: 'LINK',
                free: '0.01400000',
                locked: '0.00000000'
              },
              {
                asset: 'XRP',
                free: '830.76000000',
                locked: '0.00000000'
              },
              {
                asset: 'ADA',
                free: '605.87229929',
                locked: '0.00000000'
              },
              {
                asset: 'XLM',
                free: '1.04580929',
                locked: '0.00000000'
              },
              {
                asset: 'DOGE',
                free: '6.70000000',
                locked: '0.00000000'
              },
              {
                asset: 'LDBNB',
                free: '0.28239580',
                locked: '0.00000000'
              },
              {
                asset: 'EUR',
                free: '1838.22771627',
                locked: '0.00000000'
              },
              {
                asset: 'LDBTC',
                free: '0.00530489',
                locked: '0.00000000'
              },
              {
                asset: 'LDBUSD',
                free: '22.33909886',
                locked: '0.00000000'
              },
              {
                asset: 'LDETH',
                free: '0.02085822',
                locked: '0.00000000'
              },
              {
                asset: 'BTCUP',
                free: '0.20979000',
                locked: '0.00000000'
              },
              {
                asset: 'UNI',
                free: '0.01300000',
                locked: '0.00000000',
                total: 0.013,
                updatedAt: '2021-04-02T22:27:33.696Z',
                estimatedValue: 0.327418
              },
              {
                asset: 'LDDOT',
                free: '12.72713874',
                locked: '0.00000000'
              },
              {
                asset: 'ALICE',
                free: '0.29223526',
                locked: '0.00000000'
              }
            ],
            permissions: [
              'SPOT',
              'LEVERAGED'
            ]
          },
          refreshAccountInfo: false,
          indicators: {
            lowestPrice: 22.799,
            lastCandle: {
              openTime: 1617400800000,
              open: '25.08100000',
              high: '25.24800000',
              low: '25.04500000',
              close: '25.18600000',
              volume: '173.20200000',
              closeTime: 1617404399999,
              quoteVolume: '4356.04003100',
              trades: 33,
              baseAssetVolume: '52.80400000',
              quoteAssetVolume: '1330.63704400'
            }
          },
          symbolInfo: {
            symbol: 'UNIEUR',
            status: 'TRADING',
            baseAsset: 'UNI',
            baseAssetPrecision: 8,
            quoteAsset: 'EUR',
            quotePrecision: 8,
            filterLotSize: {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '90000.00000000',
              stepSize: '0.00100000'
            },
            filterPrice: {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00100000',
              maxPrice: '10000.00000000',
              tickSize: '0.00100000'
            },
            filterMinNotional: {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000',
              applyToMarket: true,
              avgPriceMins: 5
            }
          },
          openOrders: [],
          action: 'not-determined',
          baseAssetBalance: {
            asset: 'UNI',
            free: '0.01300000',
            locked: '0.00000000',
            total: 0.013,
            updatedAt: '2021-04-02T22:27:33.696Z',
            estimatedValue: 0.327418
          },
          quoteAssetBalance: {
            asset: 'EUR',
            free: '1838.22771627',
            locked: '0.00000000'
          },
          buy: {
            currentPrice: 25.186,
            limitPrice: 25.4907506,
            lowestPrice: 22.799,
            triggerPrice: 23.368975,
            difference: 7.775373117562934,
            openOrders: [],
            processMesage: '',
            updatedAt: '2021-04-02T22:59:02.283Z'
          },
          sell: {
            currentPrice: 25.186,
            limitPrice: 24.908954,
            lastBuyPrice: null,
            triggerPrice: null,
            difference: null,
            currentProfit: null,
            currentProfitPercentage: null,
            openOrders: [],
            processMessage: '',
            updatedAt: '2021-04-02T22:59:02.283Z'
          }
        },
        {
          globalConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          symbol: 'ETHEUR',
          symbolConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          accountInfo: {
            makerCommission: 10,
            takerCommission: 10,
            buyerCommission: 0,
            sellerCommission: 0,
            canTrade: true,
            canWithdraw: true,
            canDeposit: true,
            updateTime: 1617402453696,
            accountType: 'SPOT',
            balances: [
              {
                asset: 'USDT',
                free: '197.35559481',
                locked: '0.00000000'
              },
              {
                asset: 'LINK',
                free: '0.01400000',
                locked: '0.00000000'
              },
              {
                asset: 'XRP',
                free: '830.76000000',
                locked: '0.00000000'
              },
              {
                asset: 'ADA',
                free: '605.87229929',
                locked: '0.00000000'
              },
              {
                asset: 'XLM',
                free: '1.04580929',
                locked: '0.00000000'
              },
              {
                asset: 'DOGE',
                free: '6.70000000',
                locked: '0.00000000'
              },
              {
                asset: 'LDBNB',
                free: '0.28239580',
                locked: '0.00000000'
              },
              {
                asset: 'EUR',
                free: '1838.22771627',
                locked: '0.00000000'
              },
              {
                asset: 'LDBTC',
                free: '0.00530489',
                locked: '0.00000000'
              },
              {
                asset: 'LDBUSD',
                free: '22.33909886',
                locked: '0.00000000'
              },
              {
                asset: 'LDETH',
                free: '0.02085822',
                locked: '0.00000000'
              },
              {
                asset: 'BTCUP',
                free: '0.20979000',
                locked: '0.00000000'
              },
              {
                asset: 'UNI',
                free: '0.01300000',
                locked: '0.00000000'
              },
              {
                asset: 'LDDOT',
                free: '12.72713874',
                locked: '0.00000000'
              },
              {
                asset: 'ALICE',
                free: '0.29223526',
                locked: '0.00000000'
              }
            ],
            permissions: [
              'SPOT',
              'LEVERAGED'
            ]
          },
          refreshAccountInfo: false,
          indicators: {
            lowestPrice: 1514.63,
            lastCandle: {
              openTime: 1617400800000,
              open: '1781.16000000',
              high: '1801.51000000',
              low: '1778.98000000',
              close: '1799.45000000',
              volume: '1477.92408000',
              closeTime: 1617404399999,
              quoteVolume: '2645209.58323180',
              trades: 4127,
              baseAssetVolume: '922.35048000',
              quoteAssetVolume: '1651838.10898610'
            }
          },
          symbolInfo: {
            symbol: 'ETHEUR',
            status: 'TRADING',
            baseAsset: 'ETH',
            baseAssetPrecision: 8,
            quoteAsset: 'EUR',
            quotePrecision: 8,
            filterLotSize: {
              filterType: 'LOT_SIZE',
              minQty: '0.00001000',
              maxQty: '90000.00000000',
              stepSize: '0.00001000'
            },
            filterPrice: {
              filterType: 'PRICE_FILTER',
              minPrice: '0.01000000',
              maxPrice: '100000.00000000',
              tickSize: '0.01000000'
            },
            filterMinNotional: {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000',
              applyToMarket: true,
              avgPriceMins: 5
            }
          },
          openOrders: [],
          action: 'not-determined',
          baseAssetBalance: {
            asset: 'ETH',
            free: 0,
            locked: 0,
            total: 0,
            estimatedValue: 0,
            updatedAt: '2021-04-02T22:27:33.696Z'
          },
          quoteAssetBalance: {
            asset: 'EUR',
            free: '1838.22771627',
            locked: '0.00000000'
          },
          buy: {
            currentPrice: 1799.45,
            limitPrice: 1821.223345,
            lowestPrice: 1514.63,
            triggerPrice: 1552.49575,
            difference: 15.906919551953692,
            openOrders: [],
            processMesage: '',
            updatedAt: '2021-04-02T22:59:17.313Z'
          },
          sell: {
            currentPrice: 1799.45,
            limitPrice: 1779.65605,
            lastBuyPrice: null,
            triggerPrice: null,
            difference: null,
            currentProfit: null,
            currentProfitPercentage: null,
            openOrders: [],
            processMessage: '',
            updatedAt: '2021-04-02T22:59:17.313Z'
          }
        },
        {
          globalConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          symbol: 'XRPEUR',
          symbolConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          accountInfo: {
            makerCommission: 10,
            takerCommission: 10,
            buyerCommission: 0,
            sellerCommission: 0,
            canTrade: true,
            canWithdraw: true,
            canDeposit: true,
            updateTime: 1617402453696,
            accountType: 'SPOT',
            balances: [
              {
                asset: 'USDT',
                free: '197.35559481',
                locked: '0.00000000'
              },
              {
                asset: 'LINK',
                free: '0.01400000',
                locked: '0.00000000'
              },
              {
                asset: 'XRP',
                free: '830.76000000',
                locked: '0.00000000',
                total: 830.76,
                updatedAt: '2021-04-02T22:27:33.696Z',
                estimatedValue: 422.12577120000003
              },
              {
                asset: 'ADA',
                free: '605.87229929',
                locked: '0.00000000'
              },
              {
                asset: 'XLM',
                free: '1.04580929',
                locked: '0.00000000'
              },
              {
                asset: 'DOGE',
                free: '6.70000000',
                locked: '0.00000000'
              },
              {
                asset: 'LDBNB',
                free: '0.28239580',
                locked: '0.00000000'
              },
              {
                asset: 'EUR',
                free: '1838.22771627',
                locked: '0.00000000'
              },
              {
                asset: 'LDBTC',
                free: '0.00530489',
                locked: '0.00000000'
              },
              {
                asset: 'LDBUSD',
                free: '22.33909886',
                locked: '0.00000000'
              },
              {
                asset: 'LDETH',
                free: '0.02085822',
                locked: '0.00000000'
              },
              {
                asset: 'BTCUP',
                free: '0.20979000',
                locked: '0.00000000'
              },
              {
                asset: 'UNI',
                free: '0.01300000',
                locked: '0.00000000'
              },
              {
                asset: 'LDDOT',
                free: '12.72713874',
                locked: '0.00000000'
              },
              {
                asset: 'ALICE',
                free: '0.29223526',
                locked: '0.00000000'
              }
            ],
            permissions: [
              'SPOT',
              'LEVERAGED'
            ]
          },
          refreshAccountInfo: false,
          indicators: {
            lowestPrice: 0.45167,
            lastCandle: {
              openTime: 1617400800000,
              open: '0.50933000',
              high: '0.51114000',
              low: '0.50438000',
              close: '0.50812000',
              volume: '578111.80000000',
              closeTime: 1617404399999,
              quoteVolume: '293432.28957500',
              trades: 1336,
              baseAssetVolume: '218473.30000000',
              quoteAssetVolume: '110950.79098500'
            }
          },
          symbolInfo: {
            symbol: 'XRPEUR',
            status: 'TRADING',
            baseAsset: 'XRP',
            baseAssetPrecision: 8,
            quoteAsset: 'EUR',
            quotePrecision: 8,
            filterLotSize: {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '9000000.00000000',
              stepSize: '0.10000000'
            },
            filterPrice: {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001000',
              maxPrice: '1000.00000000',
              tickSize: '0.00001000'
            },
            filterMinNotional: {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000',
              applyToMarket: true,
              avgPriceMins: 5
            }
          },
          openOrders: [],
          action: 'sell-wait',
          baseAssetBalance: {
            asset: 'XRP',
            free: '830.76000000',
            locked: '0.00000000',
            total: 830.76,
            updatedAt: '2021-04-02T22:27:33.696Z',
            estimatedValue: 422.12577120000003
          },
          quoteAssetBalance: {
            asset: 'EUR',
            free: '1838.22771627',
            locked: '0.00000000'
          },
          buy: {
            currentPrice: 0.50812,
            limitPrice: 0.514268252,
            lowestPrice: 0.45167,
            triggerPrice: 0.46296174999999995,
            difference: 9.754207556023808,
            openOrders: [],
            processMesage: '',
            updatedAt: '2021-04-02T22:58:52.298Z'
          },
          sell: {
            currentPrice: 0.50812,
            limitPrice: 0.50253068,
            lastBuyPrice: 0.48115,
            triggerPrice: 0.519642,
            difference: -2.267574588679855,
            currentProfit: 22.405597199999995,
            currentProfitPercentage: 5.307801306777926,
            openOrders: [],
            processMessage: 'The current price is lower than the selling trigger price. Wait.',
            updatedAt: '2021-04-02T22:58:52.300Z'
          }
        },
        {
          globalConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          symbol: 'ADAEUR',
          symbolConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          accountInfo: {
            makerCommission: 10,
            takerCommission: 10,
            buyerCommission: 0,
            sellerCommission: 0,
            canTrade: true,
            canWithdraw: true,
            canDeposit: true,
            updateTime: 1617402453696,
            accountType: 'SPOT',
            balances: [
              {
                asset: 'USDT',
                free: '197.35559481',
                locked: '0.00000000'
              },
              {
                asset: 'LINK',
                free: '0.01400000',
                locked: '0.00000000'
              },
              {
                asset: 'XRP',
                free: '830.76000000',
                locked: '0.00000000'
              },
              {
                asset: 'ADA',
                free: '605.87229929',
                locked: '0.00000000',
                total: 605.87229929,
                updatedAt: '2021-04-02T22:27:33.696Z',
                estimatedValue: 612.4884247982468
              },
              {
                asset: 'XLM',
                free: '1.04580929',
                locked: '0.00000000'
              },
              {
                asset: 'DOGE',
                free: '6.70000000',
                locked: '0.00000000'
              },
              {
                asset: 'LDBNB',
                free: '0.28239580',
                locked: '0.00000000'
              },
              {
                asset: 'EUR',
                free: '1838.22771627',
                locked: '0.00000000'
              },
              {
                asset: 'LDBTC',
                free: '0.00530489',
                locked: '0.00000000'
              },
              {
                asset: 'LDBUSD',
                free: '22.33909886',
                locked: '0.00000000'
              },
              {
                asset: 'LDETH',
                free: '0.02085822',
                locked: '0.00000000'
              },
              {
                asset: 'BTCUP',
                free: '0.20979000',
                locked: '0.00000000'
              },
              {
                asset: 'UNI',
                free: '0.01300000',
                locked: '0.00000000'
              },
              {
                asset: 'LDDOT',
                free: '12.72713874',
                locked: '0.00000000'
              },
              {
                asset: 'ALICE',
                free: '0.29223526',
                locked: '0.00000000'
              }
            ],
            permissions: [
              'SPOT',
              'LEVERAGED'
            ]
          },
          refreshAccountInfo: false,
          indicators: {
            lowestPrice: 0.986,
            lastCandle: {
              openTime: 1617400800000,
              open: '1.01429000',
              high: '1.01654000',
              low: '1.00952000',
              close: '1.01092000',
              volume: '434711.10000000',
              closeTime: 1617404399999,
              quoteVolume: '440143.76192100',
              trades: 1376,
              baseAssetVolume: '165519.00000000',
              quoteAssetVolume: '167616.81929500'
            }
          },
          symbolInfo: {
            symbol: 'ADAEUR',
            status: 'TRADING',
            baseAsset: 'ADA',
            baseAssetPrecision: 8,
            quoteAsset: 'EUR',
            quotePrecision: 8,
            filterLotSize: {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '9000000.00000000',
              stepSize: '0.10000000'
            },
            filterPrice: {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001000',
              maxPrice: '1000.00000000',
              tickSize: '0.00001000'
            },
            filterMinNotional: {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000',
              applyToMarket: true,
              avgPriceMins: 5
            }
          },
          openOrders: [],
          action: 'sell-wait',
          baseAssetBalance: {
            asset: 'ADA',
            free: '605.87229929',
            locked: '0.00000000',
            total: 605.87229929,
            updatedAt: '2021-04-02T22:27:33.696Z',
            estimatedValue: 612.4884247982468
          },
          quoteAssetBalance: {
            asset: 'EUR',
            free: '1838.22771627',
            locked: '0.00000000'
          },
          buy: {
            currentPrice: 1.01092,
            limitPrice: 1.023152132,
            lowestPrice: 0.986,
            triggerPrice: 1.0106499999999998,
            difference: 0.02671548013657432,
            openOrders: [],
            processMesage: '',
            updatedAt: '2021-04-02T22:58:46.302Z'
          },
          sell: {
            currentPrice: 1.01092,
            limitPrice: 0.9997998800000001,
            lastBuyPrice: 1.0163,
            triggerPrice: 1.097604,
            difference: -8.57476358168796,
            currentProfit: -3.259592970180164,
            currentProfitPercentage: -0.5321885015629357,
            openOrders: [],
            processMessage: 'The current price is lower than the selling trigger price. Wait.',
            updatedAt: '2021-04-02T22:58:46.304Z'
          }
        },
        {
          globalConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          symbol: 'LINKEUR',
          symbolConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          accountInfo: {
            makerCommission: 10,
            takerCommission: 10,
            buyerCommission: 0,
            sellerCommission: 0,
            canTrade: true,
            canWithdraw: true,
            canDeposit: true,
            updateTime: 1617402453696,
            accountType: 'SPOT',
            balances: [
              {
                asset: 'USDT',
                free: '197.35559481',
                locked: '0.00000000'
              },
              {
                asset: 'LINK',
                free: '0.01400000',
                locked: '0.00000000',
                total: 0.014,
                updatedAt: '2021-04-02T22:27:33.696Z',
                estimatedValue: 0.381612
              },
              {
                asset: 'XRP',
                free: '830.76000000',
                locked: '0.00000000'
              },
              {
                asset: 'ADA',
                free: '605.87229929',
                locked: '0.00000000'
              },
              {
                asset: 'XLM',
                free: '1.04580929',
                locked: '0.00000000'
              },
              {
                asset: 'DOGE',
                free: '6.70000000',
                locked: '0.00000000'
              },
              {
                asset: 'LDBNB',
                free: '0.28239580',
                locked: '0.00000000'
              },
              {
                asset: 'EUR',
                free: '1838.22771627',
                locked: '0.00000000'
              },
              {
                asset: 'LDBTC',
                free: '0.00530489',
                locked: '0.00000000'
              },
              {
                asset: 'LDBUSD',
                free: '22.33909886',
                locked: '0.00000000'
              },
              {
                asset: 'LDETH',
                free: '0.02085822',
                locked: '0.00000000'
              },
              {
                asset: 'BTCUP',
                free: '0.20979000',
                locked: '0.00000000'
              },
              {
                asset: 'UNI',
                free: '0.01300000',
                locked: '0.00000000'
              },
              {
                asset: 'LDDOT',
                free: '12.72713874',
                locked: '0.00000000'
              },
              {
                asset: 'ALICE',
                free: '0.29223526',
                locked: '0.00000000'
              }
            ],
            permissions: [
              'SPOT',
              'LEVERAGED'
            ]
          },
          refreshAccountInfo: false,
          indicators: {
            lowestPrice: 22.5,
            lastCandle: {
              openTime: 1617400800000,
              open: '26.88200000',
              high: '27.41200000',
              low: '26.85500000',
              close: '27.25800000',
              volume: '5658.07600000',
              closeTime: 1617404399999,
              quoteVolume: '153597.55323400',
              trades: 920,
              baseAssetVolume: '3376.27200000',
              quoteAssetVolume: '91626.98328100'
            }
          },
          symbolInfo: {
            symbol: 'LINKEUR',
            status: 'TRADING',
            baseAsset: 'LINK',
            baseAssetPrecision: 8,
            quoteAsset: 'EUR',
            quotePrecision: 8,
            filterLotSize: {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '90000.00000000',
              stepSize: '0.00100000'
            },
            filterPrice: {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00100000',
              maxPrice: '10000.00000000',
              tickSize: '0.00100000'
            },
            filterMinNotional: {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000',
              applyToMarket: true,
              avgPriceMins: 5
            }
          },
          openOrders: [],
          action: 'not-determined',
          baseAssetBalance: {
            asset: 'LINK',
            free: '0.01400000',
            locked: '0.00000000',
            total: 0.014,
            updatedAt: '2021-04-02T22:27:33.696Z',
            estimatedValue: 0.381612
          },
          quoteAssetBalance: {
            asset: 'EUR',
            free: '1838.22771627',
            locked: '0.00000000'
          },
          buy: {
            currentPrice: 27.258,
            limitPrice: 27.5878218,
            lowestPrice: 22.5,
            triggerPrice: 23.062499999999996,
            difference: 18.19186991869921,
            openOrders: [],
            processMesage: '',
            updatedAt: '2021-04-02T22:59:00.345Z'
          },
          sell: {
            currentPrice: 27.258,
            limitPrice: 26.958161999999998,
            lastBuyPrice: null,
            triggerPrice: null,
            difference: null,
            currentProfit: null,
            currentProfitPercentage: null,
            openOrders: [],
            processMessage: '',
            updatedAt: '2021-04-02T22:59:00.345Z'
          }
        },
        {
          globalConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          symbol: 'DOGEEUR',
          symbolConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          accountInfo: {
            makerCommission: 10,
            takerCommission: 10,
            buyerCommission: 0,
            sellerCommission: 0,
            canTrade: true,
            canWithdraw: true,
            canDeposit: true,
            updateTime: 1617402453696,
            accountType: 'SPOT',
            balances: [
              {
                asset: 'USDT',
                free: '197.35559481',
                locked: '0.00000000'
              },
              {
                asset: 'LINK',
                free: '0.01400000',
                locked: '0.00000000'
              },
              {
                asset: 'XRP',
                free: '830.76000000',
                locked: '0.00000000'
              },
              {
                asset: 'ADA',
                free: '605.87229929',
                locked: '0.00000000'
              },
              {
                asset: 'XLM',
                free: '1.04580929',
                locked: '0.00000000'
              },
              {
                asset: 'DOGE',
                free: '6.70000000',
                locked: '0.00000000',
                total: 6.7,
                updatedAt: '2021-04-02T22:27:33.696Z',
                estimatedValue: 0.328166
              },
              {
                asset: 'LDBNB',
                free: '0.28239580',
                locked: '0.00000000'
              },
              {
                asset: 'EUR',
                free: '1838.22771627',
                locked: '0.00000000'
              },
              {
                asset: 'LDBTC',
                free: '0.00530489',
                locked: '0.00000000'
              },
              {
                asset: 'LDBUSD',
                free: '22.33909886',
                locked: '0.00000000'
              },
              {
                asset: 'LDETH',
                free: '0.02085822',
                locked: '0.00000000'
              },
              {
                asset: 'BTCUP',
                free: '0.20979000',
                locked: '0.00000000'
              },
              {
                asset: 'UNI',
                free: '0.01300000',
                locked: '0.00000000'
              },
              {
                asset: 'LDDOT',
                free: '12.72713874',
                locked: '0.00000000'
              },
              {
                asset: 'ALICE',
                free: '0.29223526',
                locked: '0.00000000'
              }
            ],
            permissions: [
              'SPOT',
              'LEVERAGED'
            ]
          },
          refreshAccountInfo: false,
          indicators: {
            lowestPrice: 0.04419,
            lastCandle: {
              openTime: 1617400800000,
              open: '0.04927000',
              high: '0.04939000',
              low: '0.04877000',
              close: '0.04898000',
              volume: '5932177.20000000',
              closeTime: 1617404399999,
              quoteVolume: '290950.98221200',
              trades: 868,
              baseAssetVolume: '1838706.30000000',
              quoteAssetVolume: '90265.80356000'
            }
          },
          symbolInfo: {
            symbol: 'DOGEEUR',
            status: 'TRADING',
            baseAsset: 'DOGE',
            baseAssetPrecision: 8,
            quoteAsset: 'EUR',
            quotePrecision: 8,
            filterLotSize: {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '9000000.00000000',
              stepSize: '0.10000000'
            },
            filterPrice: {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001000',
              maxPrice: '1000.00000000',
              tickSize: '0.00001000'
            },
            filterMinNotional: {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000',
              applyToMarket: true,
              avgPriceMins: 5
            }
          },
          openOrders: [],
          action: 'not-determined',
          baseAssetBalance: {
            asset: 'DOGE',
            free: '6.70000000',
            locked: '0.00000000',
            total: 6.7,
            updatedAt: '2021-04-02T22:27:33.696Z',
            estimatedValue: 0.328166
          },
          quoteAssetBalance: {
            asset: 'EUR',
            free: '1838.22771627',
            locked: '0.00000000'
          },
          buy: {
            currentPrice: 0.04898,
            limitPrice: 0.049572658000000006,
            lowestPrice: 0.04419,
            triggerPrice: 0.045294749999999995,
            difference: 8.136152644622197,
            openOrders: [],
            processMesage: '',
            updatedAt: '2021-04-02T22:59:05.128Z'
          },
          sell: {
            currentPrice: 0.04898,
            limitPrice: 0.04844122,
            lastBuyPrice: null,
            triggerPrice: null,
            difference: null,
            currentProfit: null,
            currentProfitPercentage: null,
            openOrders: [],
            processMessage: '',
            updatedAt: '2021-04-02T22:59:05.128Z'
          }
        },
        {
          globalConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          symbol: 'LTCEUR',
          symbolConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          accountInfo: {
            makerCommission: 10,
            takerCommission: 10,
            buyerCommission: 0,
            sellerCommission: 0,
            canTrade: true,
            canWithdraw: true,
            canDeposit: true,
            updateTime: 1617402453696,
            accountType: 'SPOT',
            balances: [
              {
                asset: 'USDT',
                free: '197.35559481',
                locked: '0.00000000'
              },
              {
                asset: 'LINK',
                free: '0.01400000',
                locked: '0.00000000'
              },
              {
                asset: 'XRP',
                free: '830.76000000',
                locked: '0.00000000'
              },
              {
                asset: 'ADA',
                free: '605.87229929',
                locked: '0.00000000'
              },
              {
                asset: 'XLM',
                free: '1.04580929',
                locked: '0.00000000'
              },
              {
                asset: 'DOGE',
                free: '6.70000000',
                locked: '0.00000000'
              },
              {
                asset: 'LDBNB',
                free: '0.28239580',
                locked: '0.00000000'
              },
              {
                asset: 'EUR',
                free: '1838.22771627',
                locked: '0.00000000'
              },
              {
                asset: 'LDBTC',
                free: '0.00530489',
                locked: '0.00000000'
              },
              {
                asset: 'LDBUSD',
                free: '22.33909886',
                locked: '0.00000000'
              },
              {
                asset: 'LDETH',
                free: '0.02085822',
                locked: '0.00000000'
              },
              {
                asset: 'BTCUP',
                free: '0.20979000',
                locked: '0.00000000'
              },
              {
                asset: 'UNI',
                free: '0.01300000',
                locked: '0.00000000'
              },
              {
                asset: 'LDDOT',
                free: '12.72713874',
                locked: '0.00000000'
              },
              {
                asset: 'ALICE',
                free: '0.29223526',
                locked: '0.00000000'
              }
            ],
            permissions: [
              'SPOT',
              'LEVERAGED'
            ]
          },
          refreshAccountInfo: false,
          indicators: {
            lowestPrice: 160,
            lastCandle: {
              openTime: 1617400800000,
              open: '177.53900000',
              high: '177.61200000',
              low: '175.61600000',
              close: '176.54800000',
              volume: '994.69800000',
              closeTime: 1617404399999,
              quoteVolume: '175482.63464400',
              trades: 376,
              baseAssetVolume: '579.55600000',
              quoteAssetVolume: '102224.47820300'
            }
          },
          symbolInfo: {
            symbol: 'LTCEUR',
            status: 'TRADING',
            baseAsset: 'LTC',
            baseAssetPrecision: 8,
            quoteAsset: 'EUR',
            quotePrecision: 8,
            filterLotSize: {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '90000.00000000',
              stepSize: '0.00100000'
            },
            filterPrice: {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00100000',
              maxPrice: '10000.00000000',
              tickSize: '0.00100000'
            },
            filterMinNotional: {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000',
              applyToMarket: true,
              avgPriceMins: 5
            }
          },
          openOrders: [],
          action: 'not-determined',
          baseAssetBalance: {
            asset: 'LTC',
            free: 0,
            locked: 0,
            total: 0,
            estimatedValue: 0,
            updatedAt: '2021-04-02T22:27:33.696Z'
          },
          quoteAssetBalance: {
            asset: 'EUR',
            free: '1838.22771627',
            locked: '0.00000000'
          },
          buy: {
            currentPrice: 176.548,
            limitPrice: 178.6842308,
            lowestPrice: 160,
            triggerPrice: 164,
            difference: 7.651219512195118,
            openOrders: [],
            processMesage: '',
            updatedAt: '2021-04-02T22:58:58.304Z'
          },
          sell: {
            currentPrice: 176.548,
            limitPrice: 174.605972,
            lastBuyPrice: null,
            triggerPrice: null,
            difference: null,
            currentProfit: null,
            currentProfitPercentage: null,
            openOrders: [],
            processMessage: '',
            updatedAt: '2021-04-02T22:58:58.304Z'
          }
        },
        {
          globalConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          symbol: 'EOSEUR',
          symbolConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          accountInfo: {
            makerCommission: 10,
            takerCommission: 10,
            buyerCommission: 0,
            sellerCommission: 0,
            canTrade: true,
            canWithdraw: true,
            canDeposit: true,
            updateTime: 1617402453696,
            accountType: 'SPOT',
            balances: [
              {
                asset: 'USDT',
                free: '197.35559481',
                locked: '0.00000000'
              },
              {
                asset: 'LINK',
                free: '0.01400000',
                locked: '0.00000000'
              },
              {
                asset: 'XRP',
                free: '830.76000000',
                locked: '0.00000000'
              },
              {
                asset: 'ADA',
                free: '605.87229929',
                locked: '0.00000000'
              },
              {
                asset: 'XLM',
                free: '1.04580929',
                locked: '0.00000000'
              },
              {
                asset: 'DOGE',
                free: '6.70000000',
                locked: '0.00000000'
              },
              {
                asset: 'LDBNB',
                free: '0.28239580',
                locked: '0.00000000'
              },
              {
                asset: 'EUR',
                free: '1838.22771627',
                locked: '0.00000000'
              },
              {
                asset: 'LDBTC',
                free: '0.00530489',
                locked: '0.00000000'
              },
              {
                asset: 'LDBUSD',
                free: '22.33909886',
                locked: '0.00000000'
              },
              {
                asset: 'LDETH',
                free: '0.02085822',
                locked: '0.00000000'
              },
              {
                asset: 'BTCUP',
                free: '0.20979000',
                locked: '0.00000000'
              },
              {
                asset: 'UNI',
                free: '0.01300000',
                locked: '0.00000000'
              },
              {
                asset: 'LDDOT',
                free: '12.72713874',
                locked: '0.00000000'
              },
              {
                asset: 'ALICE',
                free: '0.29223526',
                locked: '0.00000000'
              }
            ],
            permissions: [
              'SPOT',
              'LEVERAGED'
            ]
          },
          refreshAccountInfo: false,
          indicators: {
            lowestPrice: 3.475,
            lastCandle: {
              openTime: 1617400800000,
              open: '5.22300000',
              high: '5.33900000',
              low: '5.22300000',
              close: '5.32000000',
              volume: '20726.21200000',
              closeTime: 1617404399999,
              quoteVolume: '109613.17833000',
              trades: 426,
              baseAssetVolume: '10154.71100000',
              quoteAssetVolume: '53779.52015300'
            }
          },
          symbolInfo: {
            symbol: 'EOSEUR',
            status: 'TRADING',
            baseAsset: 'EOS',
            baseAssetPrecision: 8,
            quoteAsset: 'EUR',
            quotePrecision: 8,
            filterLotSize: {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '90000.00000000',
              stepSize: '0.00100000'
            },
            filterPrice: {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00100000',
              maxPrice: '10000.00000000',
              tickSize: '0.00100000'
            },
            filterMinNotional: {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000',
              applyToMarket: true,
              avgPriceMins: 5
            }
          },
          openOrders: [],
          action: 'not-determined',
          baseAssetBalance: {
            asset: 'EOS',
            free: 0,
            locked: 0,
            total: 0,
            estimatedValue: 0,
            updatedAt: '2021-04-02T22:27:33.696Z'
          },
          quoteAssetBalance: {
            asset: 'EUR',
            free: '1838.22771627',
            locked: '0.00000000'
          },
          buy: {
            currentPrice: 5.32,
            limitPrice: 5.384372,
            lowestPrice: 3.475,
            triggerPrice: 3.5618749999999997,
            difference: 49.35953676083527,
            openOrders: [],
            processMesage: '',
            updatedAt: '2021-04-02T22:59:13.286Z'
          },
          sell: {
            currentPrice: 5.32,
            limitPrice: 5.261480000000001,
            lastBuyPrice: null,
            triggerPrice: null,
            difference: null,
            currentProfit: null,
            currentProfitPercentage: null,
            openOrders: [],
            processMessage: '',
            updatedAt: '2021-04-02T22:59:13.286Z'
          }
        },
        {
          globalConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          symbol: 'BTCEUR',
          symbolConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          accountInfo: {
            makerCommission: 10,
            takerCommission: 10,
            buyerCommission: 0,
            sellerCommission: 0,
            canTrade: true,
            canWithdraw: true,
            canDeposit: true,
            updateTime: 1617402453696,
            accountType: 'SPOT',
            balances: [
              {
                asset: 'USDT',
                free: '197.35559481',
                locked: '0.00000000'
              },
              {
                asset: 'LINK',
                free: '0.01400000',
                locked: '0.00000000'
              },
              {
                asset: 'XRP',
                free: '830.76000000',
                locked: '0.00000000'
              },
              {
                asset: 'ADA',
                free: '605.87229929',
                locked: '0.00000000'
              },
              {
                asset: 'XLM',
                free: '1.04580929',
                locked: '0.00000000'
              },
              {
                asset: 'DOGE',
                free: '6.70000000',
                locked: '0.00000000'
              },
              {
                asset: 'LDBNB',
                free: '0.28239580',
                locked: '0.00000000'
              },
              {
                asset: 'EUR',
                free: '1838.22771627',
                locked: '0.00000000'
              },
              {
                asset: 'LDBTC',
                free: '0.00530489',
                locked: '0.00000000'
              },
              {
                asset: 'LDBUSD',
                free: '22.33909886',
                locked: '0.00000000'
              },
              {
                asset: 'LDETH',
                free: '0.02085822',
                locked: '0.00000000'
              },
              {
                asset: 'BTCUP',
                free: '0.20979000',
                locked: '0.00000000'
              },
              {
                asset: 'UNI',
                free: '0.01300000',
                locked: '0.00000000'
              },
              {
                asset: 'LDDOT',
                free: '12.72713874',
                locked: '0.00000000'
              },
              {
                asset: 'ALICE',
                free: '0.29223526',
                locked: '0.00000000'
              }
            ],
            permissions: [
              'SPOT',
              'LEVERAGED'
            ]
          },
          refreshAccountInfo: false,
          indicators: {
            lowestPrice: 48510.35,
            lastCandle: {
              openTime: 1617400800000,
              open: '50030.80000000',
              high: '50188.90000000',
              low: '49958.00000000',
              close: '50142.34000000',
              volume: '49.62439800',
              closeTime: 1617404399999,
              quoteVolume: '2486442.81253846',
              trades: 4427,
              baseAssetVolume: '22.94510800',
              quoteAssetVolume: '1149754.43766776'
            }
          },
          symbolInfo: {
            symbol: 'BTCEUR',
            status: 'TRADING',
            baseAsset: 'BTC',
            baseAssetPrecision: 8,
            quoteAsset: 'EUR',
            quotePrecision: 8,
            filterLotSize: {
              filterType: 'LOT_SIZE',
              minQty: '0.00000100',
              maxQty: '9000.00000000',
              stepSize: '0.00000100'
            },
            filterPrice: {
              filterType: 'PRICE_FILTER',
              minPrice: '0.01000000',
              maxPrice: '1000000.00000000',
              tickSize: '0.01000000'
            },
            filterMinNotional: {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000',
              applyToMarket: true,
              avgPriceMins: 5
            }
          },
          openOrders: [],
          action: 'not-determined',
          baseAssetBalance: {
            asset: 'BTC',
            free: 0,
            locked: 0,
            total: 0,
            estimatedValue: 0,
            updatedAt: '2021-04-02T22:27:33.696Z'
          },
          quoteAssetBalance: {
            asset: 'EUR',
            free: '1838.22771627',
            locked: '0.00000000'
          },
          buy: {
            currentPrice: 50142.34,
            limitPrice: 50749.062313999995,
            lowestPrice: 48510.35,
            triggerPrice: 49723.10874999999,
            difference: 0.8431316153377111,
            openOrders: [],
            processMesage: '',
            updatedAt: '2021-04-02T22:59:15.786Z'
          },
          sell: {
            currentPrice: 50142.34,
            limitPrice: 49590.77426,
            lastBuyPrice: null,
            triggerPrice: null,
            difference: null,
            currentProfit: null,
            currentProfitPercentage: null,
            openOrders: [],
            processMessage: '',
            updatedAt: '2021-04-02T22:59:15.786Z'
          }
        },
        {
          globalConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          symbol: 'ANKRUSDT',
          symbolConfiguration: {
            _id: '60662805bc3d8996a4acf79e',
            key: 'ANKRUSDT-configuration',
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 100,
              triggerPercentage: 1,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.06,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            },
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ]
          },
          accountInfo: {
            makerCommission: 10,
            takerCommission: 10,
            buyerCommission: 0,
            sellerCommission: 0,
            canTrade: true,
            canWithdraw: true,
            canDeposit: true,
            updateTime: 1617402453696,
            accountType: 'SPOT',
            balances: [
              {
                asset: 'USDT',
                free: '197.35559481',
                locked: '0.00000000'
              },
              {
                asset: 'LINK',
                free: '0.01400000',
                locked: '0.00000000'
              },
              {
                asset: 'XRP',
                free: '830.76000000',
                locked: '0.00000000'
              },
              {
                asset: 'ADA',
                free: '605.87229929',
                locked: '0.00000000'
              },
              {
                asset: 'XLM',
                free: '1.04580929',
                locked: '0.00000000'
              },
              {
                asset: 'DOGE',
                free: '6.70000000',
                locked: '0.00000000'
              },
              {
                asset: 'LDBNB',
                free: '0.28239580',
                locked: '0.00000000'
              },
              {
                asset: 'EUR',
                free: '1838.22771627',
                locked: '0.00000000'
              },
              {
                asset: 'LDBTC',
                free: '0.00530489',
                locked: '0.00000000'
              },
              {
                asset: 'LDBUSD',
                free: '22.33909886',
                locked: '0.00000000'
              },
              {
                asset: 'LDETH',
                free: '0.02085822',
                locked: '0.00000000'
              },
              {
                asset: 'BTCUP',
                free: '0.20979000',
                locked: '0.00000000'
              },
              {
                asset: 'UNI',
                free: '0.01300000',
                locked: '0.00000000'
              },
              {
                asset: 'LDDOT',
                free: '12.72713874',
                locked: '0.00000000'
              },
              {
                asset: 'ALICE',
                free: '0.29223526',
                locked: '0.00000000'
              }
            ],
            permissions: [
              'SPOT',
              'LEVERAGED'
            ]
          },
          refreshAccountInfo: false,
          indicators: {
            lowestPrice: 0.1475,
            lastCandle: {
              openTime: 1617400800000,
              open: '0.16918000',
              high: '0.17047600',
              low: '0.16582300',
              close: '0.16583400',
              volume: '17377222.00000000',
              closeTime: 1617404399999,
              quoteVolume: '2913639.19215600',
              trades: 5873,
              baseAssetVolume: '8507828.00000000',
              quoteAssetVolume: '1427394.83588000'
            }
          },
          symbolInfo: {
            symbol: 'ANKRUSDT',
            status: 'TRADING',
            baseAsset: 'ANKR',
            baseAssetPrecision: 8,
            quoteAsset: 'USDT',
            quotePrecision: 8,
            filterLotSize: {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '9000000.00000000',
              stepSize: '1.00000000'
            },
            filterPrice: {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000100',
              maxPrice: '1000.00000000',
              tickSize: '0.00000100'
            },
            filterMinNotional: {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000',
              applyToMarket: true,
              avgPriceMins: 5
            }
          },
          openOrders: [],
          action: 'not-determined',
          baseAssetBalance: {
            asset: 'ANKR',
            free: 0,
            locked: 0,
            total: 0,
            estimatedValue: 0,
            updatedAt: '2021-04-02T22:27:33.696Z'
          },
          quoteAssetBalance: {
            asset: 'USDT',
            free: '197.35559481',
            locked: '0.00000000'
          },
          buy: {
            currentPrice: 0.165834,
            limitPrice: 0.16784059140000002,
            lowestPrice: 0.1475,
            triggerPrice: 0.1475,
            difference: 12.429830508474593,
            openOrders: [],
            processMesage: '',
            updatedAt: '2021-04-02T22:59:11.311Z'
          },
          sell: {
            currentPrice: 0.165834,
            limitPrice: 0.164009826,
            lastBuyPrice: null,
            triggerPrice: null,
            difference: null,
            currentProfit: null,
            currentProfitPercentage: null,
            openOrders: [],
            processMessage: '',
            updatedAt: '2021-04-02T22:59:11.311Z'
          }
        },
        {
          globalConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          symbol: 'BNBEUR',
          symbolConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          accountInfo: {
            makerCommission: 10,
            takerCommission: 10,
            buyerCommission: 0,
            sellerCommission: 0,
            canTrade: true,
            canWithdraw: true,
            canDeposit: true,
            updateTime: 1617402453696,
            accountType: 'SPOT',
            balances: [
              {
                asset: 'USDT',
                free: '197.35559481',
                locked: '0.00000000'
              },
              {
                asset: 'LINK',
                free: '0.01400000',
                locked: '0.00000000'
              },
              {
                asset: 'XRP',
                free: '830.76000000',
                locked: '0.00000000'
              },
              {
                asset: 'ADA',
                free: '605.87229929',
                locked: '0.00000000'
              },
              {
                asset: 'XLM',
                free: '1.04580929',
                locked: '0.00000000'
              },
              {
                asset: 'DOGE',
                free: '6.70000000',
                locked: '0.00000000'
              },
              {
                asset: 'LDBNB',
                free: '0.28239580',
                locked: '0.00000000'
              },
              {
                asset: 'EUR',
                free: '1838.22771627',
                locked: '0.00000000'
              },
              {
                asset: 'LDBTC',
                free: '0.00530489',
                locked: '0.00000000'
              },
              {
                asset: 'LDBUSD',
                free: '22.33909886',
                locked: '0.00000000'
              },
              {
                asset: 'LDETH',
                free: '0.02085822',
                locked: '0.00000000'
              },
              {
                asset: 'BTCUP',
                free: '0.20979000',
                locked: '0.00000000'
              },
              {
                asset: 'UNI',
                free: '0.01300000',
                locked: '0.00000000'
              },
              {
                asset: 'LDDOT',
                free: '12.72713874',
                locked: '0.00000000'
              },
              {
                asset: 'ALICE',
                free: '0.29223526',
                locked: '0.00000000'
              }
            ],
            permissions: [
              'SPOT',
              'LEVERAGED'
            ]
          },
          refreshAccountInfo: false,
          indicators: {
            lowestPrice: 230.501,
            lastCandle: {
              openTime: 1617400800000,
              open: '287.00030000',
              high: '288.73570000',
              low: '283.38250000',
              close: '283.50000000',
              volume: '3191.42200000',
              closeTime: 1617404399999,
              quoteVolume: '914245.35297090',
              trades: 2713,
              baseAssetVolume: '1438.70800000',
              quoteAssetVolume: '412215.36615870'
            }
          },
          symbolInfo: {
            symbol: 'BNBEUR',
            status: 'TRADING',
            baseAsset: 'BNB',
            baseAssetPrecision: 8,
            quoteAsset: 'EUR',
            quotePrecision: 8,
            filterLotSize: {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '900000.00000000',
              stepSize: '0.00100000'
            },
            filterPrice: {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00010000',
              maxPrice: '100000.00000000',
              tickSize: '0.00010000'
            },
            filterMinNotional: {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000',
              applyToMarket: true,
              avgPriceMins: 5
            }
          },
          openOrders: [],
          action: 'not-determined',
          baseAssetBalance: {
            asset: 'BNB',
            free: 0,
            locked: 0,
            total: 0,
            estimatedValue: 0,
            updatedAt: '2021-04-02T22:27:33.696Z'
          },
          quoteAssetBalance: {
            asset: 'EUR',
            free: '1838.22771627',
            locked: '0.00000000'
          },
          buy: {
            currentPrice: 283.5,
            limitPrice: 286.93035,
            lowestPrice: 230.501,
            triggerPrice: 236.263525,
            difference: 19.993130551996984,
            openOrders: [],
            processMesage: '',
            updatedAt: '2021-04-02T22:58:50.287Z'
          },
          sell: {
            currentPrice: 283.5,
            limitPrice: 280.3815,
            lastBuyPrice: null,
            triggerPrice: null,
            difference: null,
            currentProfit: null,
            currentProfitPercentage: null,
            openOrders: [],
            processMessage: '',
            updatedAt: '2021-04-02T22:58:50.287Z'
          }
        },
        {
          globalConfiguration: {
            _id: '605f0b649aea6ca5b1560e06',
            key: 'configuration',
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ],
            candles: {
              interval: '1h',
              limit: 96
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 800,
              triggerPercentage: 1.025,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.08,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            }
          },
          symbol: 'BTCUPUSDT',
          symbolConfiguration: {
            _id: '6062e1799aea6ca5b1560e19',
            key: 'BTCUPUSDT-configuration',
            candles: {
              interval: '1h',
              limit: 24
            },
            buy: {
              enabled: true,
              maxPurchaseAmount: 150,
              triggerPercentage: 1,
              stopPercentage: 1.012,
              limitPercentage: 1.0121
            },
            sell: {
              enabled: true,
              triggerPercentage: 1.03,
              stopPercentage: 0.99,
              limitPercentage: 0.989
            },
            enabled: true,
            cronTime: '* * * * * *',
            symbols: [
              'BTCEUR',
              'ETHEUR',
              'ADAEUR',
              'XLMEUR',
              'BNBEUR',
              'XRPEUR',
              'DOTEUR',
              'BCHEUR',
              'LTCEUR',
              'LINKEUR',
              'UNIEUR',
              'DOGEEUR',
              'BTCUPUSDT',
              'XMRUSDT',
              'ANKRUSDT',
              'EOSEUR'
            ],
            supportFIATs: [
              'EUR',
              'USDT'
            ]
          },
          accountInfo: {
            makerCommission: 10,
            takerCommission: 10,
            buyerCommission: 0,
            sellerCommission: 0,
            canTrade: true,
            canWithdraw: true,
            canDeposit: true,
            updateTime: 1617402453696,
            accountType: 'SPOT',
            balances: [
              {
                asset: 'USDT',
                free: '197.35559481',
                locked: '0.00000000'
              },
              {
                asset: 'LINK',
                free: '0.01400000',
                locked: '0.00000000'
              },
              {
                asset: 'XRP',
                free: '830.76000000',
                locked: '0.00000000'
              },
              {
                asset: 'ADA',
                free: '605.87229929',
                locked: '0.00000000'
              },
              {
                asset: 'XLM',
                free: '1.04580929',
                locked: '0.00000000'
              },
              {
                asset: 'DOGE',
                free: '6.70000000',
                locked: '0.00000000'
              },
              {
                asset: 'LDBNB',
                free: '0.28239580',
                locked: '0.00000000'
              },
              {
                asset: 'EUR',
                free: '1838.22771627',
                locked: '0.00000000'
              },
              {
                asset: 'LDBTC',
                free: '0.00530489',
                locked: '0.00000000'
              },
              {
                asset: 'LDBUSD',
                free: '22.33909886',
                locked: '0.00000000'
              },
              {
                asset: 'LDETH',
                free: '0.02085822',
                locked: '0.00000000'
              },
              {
                asset: 'BTCUP',
                free: '0.20979000',
                locked: '0.00000000',
                total: 0.20979,
                updatedAt: '2021-04-02T22:27:33.696Z',
                estimatedValue: 38.21933241
              },
              {
                asset: 'UNI',
                free: '0.01300000',
                locked: '0.00000000'
              },
              {
                asset: 'LDDOT',
                free: '12.72713874',
                locked: '0.00000000'
              },
              {
                asset: 'ALICE',
                free: '0.29223526',
                locked: '0.00000000'
              }
            ],
            permissions: [
              'SPOT',
              'LEVERAGED'
            ]
          },
          refreshAccountInfo: false,
          indicators: {
            lowestPrice: 180,
            lastCandle: {
              openTime: 1617400800000,
              open: '181.02600000',
              high: '182.30000000',
              low: '180.85800000',
              close: '182.17900000',
              volume: '2286.83000000',
              closeTime: 1617404399999,
              quoteVolume: '415556.22623000',
              trades: 333,
              baseAssetVolume: '1060.06000000',
              quoteAssetVolume: '192677.78140000'
            }
          },
          symbolInfo: {
            symbol: 'BTCUPUSDT',
            status: 'TRADING',
            baseAsset: 'BTCUP',
            baseAssetPrecision: 8,
            quoteAsset: 'USDT',
            quotePrecision: 8,
            filterLotSize: {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '920000.00000000',
              stepSize: '0.01000000'
            },
            filterPrice: {
              filterType: 'PRICE_FILTER',
              minPrice: '16.86700000',
              maxPrice: '320.46100000',
              tickSize: '0.00100000'
            },
            filterMinNotional: {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000',
              applyToMarket: true,
              avgPriceMins: 5
            }
          },
          openOrders: [],
          action: 'sell-wait',
          baseAssetBalance: {
            asset: 'BTCUP',
            free: '0.20979000',
            locked: '0.00000000',
            total: 0.20979,
            updatedAt: '2021-04-02T22:27:33.696Z',
            estimatedValue: 38.21933241
          },
          quoteAssetBalance: {
            asset: 'USDT',
            free: '197.35559481',
            locked: '0.00000000'
          },
          buy: {
            currentPrice: 182.179,
            limitPrice: 184.3833659,
            lowestPrice: 180,
            triggerPrice: 180,
            difference: 1.2105555555555592,
            openOrders: [],
            processMesage: '',
            updatedAt: '2021-04-02T22:59:07.284Z'
          },
          sell: {
            currentPrice: 182.179,
            limitPrice: 180.175031,
            lastBuyPrice: 181.971,
            triggerPrice: 187.43013000000002,
            difference: -2.8824013744723764,
            currentProfit: 0.043636319999999666,
            currentProfitPercentage: 0.11417342284236742,
            openOrders: [],
            processMessage: 'The current price is lower than the selling trigger price. Wait.',
            updatedAt: '2021-04-02T22:59:07.286Z'
          }
        }
      ]
    }
  }
);
