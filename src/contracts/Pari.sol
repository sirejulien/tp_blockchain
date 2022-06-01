// SPDX-License-Identifier: MIT

import "./IERC20.sol";

pragma solidity ^0.8.7;

abstract contract Pari is IERC20 {
    address arbitre;
    address parieurA;
    address parieurB;
    uint256 montant;
    string condition;
    bool pariInitialise;
    bool pariInvalide;
    bool pariTermine;
    address gagnant;
    address adresseComission = 0xa763c87830f128B7ef7F85a501F2Fd4d4729857c;

    constructor (address _arbitre, address _parieurA, address _parieurB, uint256 _montant, string memory _condition) {
        arbitre = _arbitre;
        parieurA = _parieurA;
        parieurB = _parieurB;
        montant = _montant;
        condition = _condition;
        pariInitialise=false;
        pariInvalide=false;
        pariTermine=false;
        InitialiserPari();
    }

    function InitialiserPari() public {
        if (VerificationMise()) {
            this.transferFrom(parieurA,arbitre,montant);
            this.transferFrom(parieurB,arbitre,montant);
            pariInitialise=true;
        } else {
            pariInitialise=false;
        }
    }

    function VerificationMise() private view returns (bool success) {
        require(this.balanceOf(parieurA)>= montant);
        require(this.balanceOf(parieurB) + montant >= this.balanceOf(parieurB));
        require(this.balanceOf(parieurB)>= montant);
        require(this.balanceOf(parieurA) + montant >= this.balanceOf(parieurA));
        require(bytes(condition).length>0);
        require(montant>0);
        return true;
    }

    function InvaliderPari() public {
        this.transferFrom(arbitre,parieurA,montant);
        this.transferFrom(arbitre,parieurB,montant);
        pariInvalide=true;
    }

    function DeclarerGagnant(address _gagnant) public returns (bool success) {
        
        uint256 commission = montant*2/100;
        uint256 versement = montant*2-commission;
        if (_gagnant==parieurA) {
            gagnant=_gagnant;
            this.transferFrom(arbitre,parieurA,versement);
            this.transferFrom(arbitre,adresseComission,commission);
            pariTermine=true;
            return true;
        } else if (_gagnant == parieurB) {
            gagnant=_gagnant;
            this.transferFrom(arbitre,parieurB,versement);
            this.transferFrom(arbitre,adresseComission,commission);
            pariTermine=true;
            return true;
        } else {
            return false;
        }
    }
}