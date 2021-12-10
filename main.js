const packages = [
  {
    heavy: true,
    priority: false,
    fragile: false,
    to: "Harrington",
    trackingNumber: "1324kjs",
  },
  {
    heavy: false,
    priority: true,
    fragile: true,
    to: "Mark",
    trackingNumber: "1325sdk",
  },
  {
    heavy: true,
    priority: false,
    fragile: true,
    to: "Mick",
    trackingNumber: "jffd147",
  },
  {
    heavy: false,
    priority: false,
    fragile: false,
    to: "Jake",
    trackingNumber: "acdc145",
  },
  {
    heavy: false,
    priority: true,
    fragile: false,
    to: "Jonesy",
    trackingNumber: "8081baz",
  },
  {
    heavy: true,
    priority: false,
    fragile: true,
    to: "Justin",
    trackingNumber: "suz2367",
  },
];

function listAll() {
  let packTemp = "";
  for (let i = 0; i < packages.length; i++) {
    const pack = packages[i];
    packTemp += `
            <div class="col-3 p-3 m-3 card">
              <ul>
                <li>To: ${pack.to}</li>
                <li>Tracking #: ${pack.trackingNumber}</li>
                <li>Fragile: ${pack.fragile}</li>
                <li>Priority: ${pack.priority}</li>
                <li>Heavy: ${pack.heavy}</li>
              </ul>
            </div>`;
  }

  document.getElementById("packList").innerHTML = packTemp;
}

function random() {
  let randomPackage = packages[Math.floor(Math.random() * 5)];
  console.log(randomPackage);
}

function startState() {
  let start = "";
  start = `<div class="col-6 p-5 text-center">Ready for input.</div>`;

  document.getElementById("packList").innerHTML = start;
}

startState();
