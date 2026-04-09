export default function handler(req, res) {

  res.setHeader('Access-Control-Allow-Origin', '*'); // 🔥 ADD THIS

  res.status(200).json({
    unread: 1,
    bookings: 14,
    revenue: 649
  });
}
function updateMetric(type, value) {

  if (type === 'bookings') {
    const el = document.getElementById('bookings-value');
    if (el) el.textContent = value;
  }

  if (type === 'revenue') {
    const el = document.getElementById('revenue-value');
    if (el) el.textContent = value;
  }

  if (type === 'unread') {
    const el = document.getElementById('unread-value');
    if (el) el.textContent = value;

    const alert = document.querySelector('.alert-red');
    if (alert) alert.textContent = `🔴 ${value} unread messages`;
  }

}
