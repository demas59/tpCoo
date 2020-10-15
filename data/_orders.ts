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
    ]
  }
]