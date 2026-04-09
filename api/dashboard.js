export default function handler(req, res) {

  res.setHeader('Access-Control-Allow-Origin', '*'); // 🔥 ADD THIS

  res.status(200).json({
    unread: 1,
    bookings: 14,
    revenue: 649
  });
}
