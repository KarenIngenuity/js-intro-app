require 'rspec'

class PrimeTest
  def is_prime?(number)
    modulo_results = []
    previous_numbers = []
    for i in 2..(number - 1)
      previous_numbers << i
    end
    previous_numbers.each do |prev_num|
      if number % prev_num == 0
        modulo_results << prev_num
      end
    end
    if modulo_results == []
      return true
    else
      return false
    end
  end

  def highest_prime_number_under(number)
    
  end
end

RSpec.describe PrimeTest do
  describe '#highest_prime_number_under' do
    it 'should return 7 if given 10' do
      primetest = PrimeTest.new
      expect(primetest.highest_prime_number_under(10)).to eq(7)
    end
  end
end