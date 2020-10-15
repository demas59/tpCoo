export const orders = [
  {
    id: 1,
    packages: [
      {
        length: {
          unit: 'cm',
          value: 50
        },
        width: {
          unit: 'cm',
          value: 50
        },
        height: {
          unit: 'cm',
          value: 50
        },
        weight: {
          unit: 'kg',
          value: 2.55
        },
        products: [
          {
            name: 'Paire de dés en mousse',
            price: {
              currency: 'EUR',
              value: 2.36
            }
          },
          {
            name: 'Trépied caméra',
            price: {
              currency: 'EUR',
              value: 15.50
            }
          },
          {
            name: 'Clavier Razer',
            price: {
              currency: 'EUR',
              value: 2500
            }
          }
        ]
      }
    ],
    delivery: {
      storePickingInterval: {
        start: '2020-10-15T15:00:00.000Z',
        end: '2020-10-15T16:00:00.000Z',
      },
      deliveryInterval: {
        start: '2020-10-16T17:00:00.000Z',
        end: '2020-10-16T19:00:00.000Z',
      },
      contact: {
        fullname: 'André Martel',
        email: 'andre.martel@mail.fr',
        phone: '+33600000000',
        address: '237 rue du ballon',
        postalCode: '59000',
        city: 'Lille',
      },
      carrier: {
        name: 'Chronopost',
      }
    }
  }
]