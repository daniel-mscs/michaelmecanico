// Dados da oficina — edite aqui.
export const WHATSAPP_NUMBER = '5555999433891'
export const WHATSAPP_DISPLAY = '(55) 99943-3891'

// TODO: trocar pelo endereço real da oficina.
export const ADDRESS_LINE = 'Endereço a confirmar'
export const CITY = 'Santa Maria – RS'
export const MAPS_QUERY = 'Santa Maria, RS'

// TODO: confirmar horário de funcionamento.
export const HOURS = [
  { days: 'Segunda a sexta', time: '08h – 18h' },
  { days: 'Sábado', time: '08h – 12h' },
  { days: 'Domingo', time: 'Fechado' },
]

export const waLink = (text = 'Olá Michael! Vim pelo site e queria um orçamento.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

export const SERVICES = [
  { id: 'freio', name: 'Freio', desc: 'Pastilhas, discos e fluido revisados pra tu parar seguro.' },
  { id: 'suspensao', name: 'Suspensão', desc: 'Amortecedores, buchas e pivôs: chega de barulho e batida seca.' },
  { id: 'motor', name: 'Motor', desc: 'Do óleo à retífica, cuidado de quem conhece motor por dentro.' },
  { id: 'injecao', name: 'Injeção eletrônica', desc: 'Scanner, limpeza de bicos e falhas resolvidas na raiz.' },
]
