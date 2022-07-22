export default function handler(req, res) {
  res.status(201).json({ signupData: req.body})
}