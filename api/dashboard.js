export default function handler(req, res) {
  res.status(200).json({
    unread: 1,
    bookings: 14,
    revenue: 649
  });
}
