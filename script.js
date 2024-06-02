 document.getElementById('toggle-form').addEventListener('click', function() {
      const calculatorContainer = document.getElementById('calculator-container');
      const toggleButton = document.getElementById('toggle-form');
      if (calculatorContainer.classList.contains('hidden')) {
        calculatorContainer.classList.remove('hidden');
        toggleButton.innerHTML = '<i class="fas fa-eye-slash mr-2"></i>Hide Calculator';
      } else {
        calculatorContainer.classList.add('hidden');
        toggleButton.innerHTML = '<i class="fas fa-eye mr-2"></i>Show Calculator';
      }
    });

    document.getElementById('toggle-theme').addEventListener('click', function() {
      const body = document.body;
      const toggleButton = document.getElementById('toggle-theme');
      if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        toggleButton.innerHTML = '<i class="fas fa-moon mr-2"></i>Dark Mode';
      } else {
        body.classList.add('dark-mode');
        toggleButton.innerHTML = '<i class="fas fa-sun mr-2"></i>Light Mode';
      }
    });

    document.getElementById('emi-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const realCost = parseFloat(document.getElementById('real-cost').value);
      const couponDiscount = parseFloat(document.getElementById('coupon-discount').value) || 0;
      const commonDiscount = parseFloat(document.getElementById('common-discount').value) || 0;
      const nonEmiDiscount = parseFloat(document.getElementById('non-emi-discount').value) || 0;
      const emiPaymentDiscount = parseFloat(document.getElementById('emi-payment-discount').value) || 0;
      const noCostEmiDiscount = parseFloat(document.getElementById('no-cost-emi-discount').value) || 0;
      const processingFees = parseFloat(document.getElementById('processing-fees').value) || 0;
      const tenure = parseInt(document.getElementById('tenure').value);

      if (isNaN(realCost) || isNaN(tenure) || realCost <= 0 || tenure <= 0) {
        alert('Please enter valid values.');
        return;
      }

      const totalDiscounts = couponDiscount + commonDiscount + nonEmiDiscount + emiPaymentDiscount + noCostEmiDiscount;
      const principal = realCost - totalDiscounts + processingFees;
      const emi = principal / tenure;

      document.getElementById('result').textContent = `Your EMI is ₹${emi.toFixed(2)} per month.`;
    });

    document.getElementById('clear-form').addEventListener('click', function() {
      document.getElementById('emi-form').reset();
      document.getElementById('result').textContent = '';
    });
